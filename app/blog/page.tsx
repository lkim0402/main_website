import PostLink from "../../components/post/PostLink";
import PageTitle from "../../components/PageTitle";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Subtitle from "components/SubTitle";
import Link from "next/link";

// processed blog object
type BlogEntry = {
  slug: string;
  formattedDate: string;
  actualDate: Date;
  meta: FrontMatter;
};

type FrontMatter = {
  title: string;
  date: string | Date;
  Tags: string[];
  Category: string;
  Published: boolean;
  [key: string]: unknown;
};

// getting, filtering (published), and ordering blog posts
function getPostList(blogs: BlogEntry[]) {
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
      // directory -> dive deeper
      files = files.concat(getPostFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      // .mdx file -> add its full path
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
    // object destructuring + rename, using matter() from graymatter
    // returns data (metadata) and content (actual mdx content)
    const { data: frontMatter } = matter(fileContents);
    const date = new Date(frontMatter.date);

    const actualDate = new Date(date);
    const formattedDate = formatDate(actualDate);
    return {
      slug, // e.g "2025/aws-ccp-cert"
      formattedDate,
      actualDate,
      // key(object name): meta, value: frontMatter
      meta: frontMatter as FrontMatter,
    };
  });

  const processedBlogs = getPostList(blogs);

  // for recent posts
  const recentBlogs = processedBlogs.slice(0, 10);

  // for year
  const postCounts = processedBlogs.reduce((acc, blog) => {
    const year = blog.actualDate.getFullYear().toString();
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const yearList = Object.keys(postCounts).sort(
    (a, b) => Number(b) - Number(a)
  );

  // for category
  const slugify = (text: string) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");
  };
  const categoryCounts = processedBlogs.reduce((acc, blog) => {
    const category = blog.meta.Category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categoryList = Object.keys(categoryCounts).sort();

  return (
    <div>
      <PageTitle
        title="Blogging"
        description="Posts about programming, reflections, and almost anything that's on my mind"
      />
      <Subtitle title="Most Recent" />
      <div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row "></div>
          <div>
            <ul className="">
              {recentBlogs.map((blog) => (
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

      {/* Category */}
      <div className="mt-6">
        <Subtitle title="By Category" />
        <ul className="list-disc pl-3">
          {categoryList.map((category) => (
            <li key={category}>
              <div
                className="text-gray-800 dark:text-gray-100
                transition duration-300 ease-in-out hover:scale-101
                origin-left
                font-normal underline decoration-dotted"
              >
                <Link href={"/blog/category/" + slugify(category) + "/"}>
                  {" "}
                  {category} ({categoryCounts[category]})
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Year */}
      <div className="mt-6">
        <Subtitle title="By Year" />
        <ul className="list-disc pl-3">
          {yearList.map((year) => (
            <li key={year}>
              <div
                className="text-gray-800 dark:text-gray-100
                transition duration-300 ease-in-out hover:scale-101
                origin-left
                font-normal underline decoration-dotted"
              >
                <Link href={"/blog/archive/" + year + "/"}>
                  {year} ({postCounts[year]}){" "}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
