import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

export type FrontMatter = {
  title: string;
  date: string | Date;
  Tags: string[];
  Category: string;
  Subcategory?: string;
  project?: string;
  Published: boolean;
  [key: string]: unknown;
};

export type BlogEntry = {
  slug: string;
  formattedDate: string;
  actualDate: Date;
  meta: FrontMatter;
};

// devlog
export type DevlogEntry = {
  slug: string;
  project: string;
  fullPath: string;
  formattedDate: string;
  actualDate: Date;
  meta: FrontMatter;
};

// for case studies
export type CaseStudyFrontMatter = {
  title: string;
  date: string;
  org: string;
  summary: string;
  impact: string;
  tech: string[];
  team: string;
  Published: boolean;
};

export type CaseStudyEntry = {
  slug: string;
  meta: CaseStudyFrontMatter;
};

export function formatDate(date: Date) {
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return [d.getFullYear(), month, day].join("/");
}

export const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");

function walkMdx(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkMdx(full));
    else if (entry.isFile() && entry.name.endsWith(".mdx")) out.push(full);
  }
  return out;
}

// Memoized for the lifetime of a single render — all blog pages share one parse.
export const getAllPosts = cache((): BlogEntry[] => {
  const root = path.join(process.cwd(), "posts");
  return walkMdx(root)
    .map((fullPath) => {
      const rel = path.relative(root, fullPath).replace(/\\/g, "/");
      const slug = rel.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(fullPath, "utf8"));
      const meta = data as FrontMatter;
      const actualDate = new Date(meta.date);
      return { slug, formattedDate: formatDate(actualDate), actualDate, meta };
    })
    .filter((b) => b.meta.Published)
    .sort((a, b) => b.actualDate.valueOf() - a.actualDate.valueOf());
});

export const getAllDevlogs = cache((): DevlogEntry[] => {
  const root = path.join(process.cwd(), "devlogs");
  return walkMdx(root)
    .map((fullPath) => {
      const rel = path.relative(root, fullPath).replace(/\\/g, "/");
      const slug = rel.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(fullPath, "utf8"));
      const meta = data as FrontMatter;
      if (meta.Published === false) return null;
      const actualDate = meta.date
        ? new Date(meta.date)
        : fs.statSync(fullPath).mtime;
      return {
        slug,
        project: rel.split("/")[0],
        fullPath,
        formattedDate: formatDate(actualDate),
        actualDate,
        meta,
      };
    })
    .filter((d): d is DevlogEntry => d !== null)
    .sort((a, b) => b.actualDate.valueOf() - a.actualDate.valueOf());
});

export function getPostContent(slug: string[]) {
  const decoded = slug.map((s) => decodeURIComponent(s));
  const candidates = [
    path.join(process.cwd(), "posts", ...decoded) + ".mdx",
    path.join(process.cwd(), "devlogs", ...decoded) + ".mdx",
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      const { data, content } = matter(fs.readFileSync(p, "utf-8"));
      return { frontMatter: data, content };
    }
  }
  throw new Error(`Post not found: ${decoded.join("/")}`);
}

export function getDevlogProjectDirs(): string[] {
  const root = path.join(process.cwd(), "devlogs");
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

export function resolveDevlogProjectDir(projectSlug: string): string | null {
  return getDevlogProjectDirs().find((d) => slugify(d) === projectSlug) ?? null;
}

export const getAllCaseStudies = cache((): CaseStudyEntry[] => {
  const root = path.join(process.cwd(), "case-studies");
  return walkMdx(root)
    .map((fullPath) => {
      const rel = path.relative(root, fullPath).replace(/\\/g, "/");
      const slug = rel.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(fullPath, "utf8"));
      const meta = data as CaseStudyFrontMatter;
      if (meta.Published === false) return null;
      return { slug, meta };
    })
    .filter((c): c is CaseStudyEntry => c !== null)
    .sort(
      (a, b) =>
        new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf(),
    );
});

export function getCaseStudyContent(slug: string) {
  const filePath = path.join(process.cwd(), "case-studies", slug) + ".mdx";
  if (!fs.existsSync(filePath))
    throw new Error(`Case study not found: ${slug}`);
  const { data, content } = matter(fs.readFileSync(filePath, "utf-8"));
  return { frontMatter: data as CaseStudyFrontMatter, content };
}

export function getDevlogPostContent(projectSlug: string, postSlug: string[]) {
  const actualDirName = resolveDevlogProjectDir(projectSlug);
  if (!actualDirName) {
    throw new Error(`Project folder not found for slug: ${projectSlug}`);
  }
  const decoded = postSlug.map((s) => decodeURIComponent(s));
  const filePath =
    path.join(process.cwd(), "devlogs", actualDirName, ...decoded) + ".mdx";
  if (!fs.existsSync(filePath)) {
    throw new Error(`Devlog not found: ${filePath}`);
  }
  const { data, content } = matter(fs.readFileSync(filePath, "utf-8"));
  return { frontMatter: data, content, actualDirName };
}
