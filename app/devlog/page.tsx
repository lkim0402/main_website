import PageTitle from "../../components/PageTitle";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import DevlogClient from "../../components/devlog/DevlogClient";
import { projectData } from "@/data/projectData";

type FrontMatter = {
  title: string;
  date: string | Date;
  Tags: string[];
  Category: string;
  project?: string;
  Published: boolean;
};

// formatting date
function formatDate(date: Date) {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("/");
}

// Recursive function to find all .mdx files
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

export default async function Devlog() {
  const devlogDirectory = path.join(process.cwd(), "devlogs");
  
  // Ensure the directory exists
  if (!fs.existsSync(devlogDirectory)) {
    fs.mkdirSync(devlogDirectory);
  }

  // Get all project directories
  const projectDirs = fs.readdirSync(devlogDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  // Get all devlog posts to check for content
  const allPostFilePaths = getPostFiles(devlogDirectory);
  const posts = allPostFilePaths
    .map((fullPath) => {
      const relativePath = path.relative(devlogDirectory, fullPath);
      const slug = relativePath.replace(/\\/g, "/").replace(".mdx", "");
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data: frontMatter } = matter(fileContents);
      const meta = frontMatter as FrontMatter;

      // Default to published unless explicitly set to false
      if (meta.Published === false) return null;

      // Use file mtime if date is missing
      const postDate = meta.date ? new Date(meta.date) : fs.statSync(fullPath).mtime;

      return {
        slug,
        project: relativePath.split(path.sep)[0],
        date: formatDate(postDate),
      };
    })
    .filter((post) => post !== null);

  const projectsWithStatus = projectDirs
    .map((dirName) => ({
      title: dirName,
      hasDevlogs: posts.some((post) => post.project === dirName),
    }))
    .filter((p) => p.hasDevlogs);

  return (
    <div className="flex flex-col gap-">
      <PageTitle
        title="Devlogs"
        description="A project-based archive"
      />
      <DevlogClient projects={projectsWithStatus} />
    </div>
  );
}
