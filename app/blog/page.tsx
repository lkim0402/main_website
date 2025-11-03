import PostLink from "../../components/post/PostLink"; // Assuming you'll use this later
import PageTitle from "../../components/PageTitle";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// getting, filtering (published), and ordering blog posts
function getPostList(blogs) {
  return blogs
    .filter((blog) => blog.meta.Published)
    .sort(
      (a, b) =>
        new Date(b.actualDate).valueOf() - new Date(a.actualDate).valueOf()
    );
}

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
      // If it's a directory, dive deeper
      files = files.concat(getPostFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      // If it's an .mdx file, add its full path
      files.push(fullPath);
    }
  }
  return files;
};

export default async function Workshop() {
  const blogDirectory = path.join(process.cwd(), "posts");

  // get all file paths
  const allPostFilePaths = getPostFiles(blogDirectory);

  // map over the full paths, not just file names
  const blogs = allPostFilePaths.map((fullPath) => {
    // Create the correct slug from the relative path
    // "posts/2025/aws-ccp-cert.mdx" -> "2025/aws-ccp-cert"
    const relativePath = path.relative(blogDirectory, fullPath);
    const slug = relativePath.replace(/\\/g, "/").replace(".mdx", "");

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontMatter } = matter(fileContents);
    const date = new Date(frontMatter.date);

    const actualDate = new Date(date);
    const formattedDate = formatDate(actualDate);
    return {
      slug, // e.g "2025/aws-ccp-cert"
      formattedDate,
      actualDate,
      meta: frontMatter,
    };
  });

  const processedBlogs = getPostList(blogs);

  return (
    <div>
      <PageTitle
        title="Blogging"
        description="Posts/writings about projects, devlogs, certifications, notes, etc."
      />
      <div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row "></div>
          <div>
            {/* This map will now work correctly */}
            <ul className="">
              {processedBlogs.map((blog) => (
                <li key={blog.slug}>
                  <PostLink
                    path={blog.slug}
                    date={blog.formattedDate}
                    title={blog.meta.title}
                  ></PostLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
