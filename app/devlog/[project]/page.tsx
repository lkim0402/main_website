import PageTitle from "../../../components/PageTitle";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostLink from "../../../components/post/PostLink";
import { projectData } from "@/data/projectData";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import BackButton from "components/BackButton";

type FrontMatter = {
  title: string;
  date: string | Date;
  Tags: string[];
  Category: string;
  project?: string;
  Published: boolean;
};

function formatDate(date: Date) {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("/");
}

const getPostFiles = (dir: string): string[] => {
  let files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getPostFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }
  return files;
};

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

export default async function ProjectDevlogPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project: projectSlug } = await params;
  const devlogDirectory = path.join(process.cwd(), "devlogs");
  
  // Find the actual directory name that matches the slug
  const projectDirs = fs.readdirSync(devlogDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  const actualDirName = projectDirs.find(dir => slugify(dir) === projectSlug);
  
  if (!actualDirName) {
    return <div>Project folder not found.</div>;
  }

  const projectPath = path.join(devlogDirectory, actualDirName);
  const allPostFilePaths = getPostFiles(projectPath);

  const posts = allPostFilePaths
    .map((fullPath) => {
      // Get path relative to the project directory, not the devlogs root
      const relativePathToProject = path.relative(projectPath, fullPath);
      const postSlug = relativePathToProject.replace(/\\/g, "/").replace(".mdx", "");
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data: frontMatter } = matter(fileContents);
      const meta = frontMatter as FrontMatter;

      if (meta.Published === false) return null;

      const postDate = meta.date ? new Date(meta.date) : fs.statSync(fullPath).mtime;

      return {
        slug: postSlug,
        title: meta.title || path.basename(fullPath, ".mdx"),
        date: formatDate(postDate),
      };
    })
    .filter((post) => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="animate-in fade-in duration-300">

      <BackButton/>
      <div>Devlogs for {actualDirName}</div>
      {/* <PageTitle
        title={actualDirName}
        description={`Devlogs for ${actualDirName}`}
      /> */}
      
      

      <div className="mt-8">
        <div className="flex flex-col justify-center">
          <ul className="">
            {posts.map((post) => (
              <li key={post.slug}>
                <PostLink
                  path={post.slug}
                  date={post.date}
                  title={post.title}
                  rootPath={`/devlog/${projectSlug}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
