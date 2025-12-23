import PostLink from "../../../../components/post/PostLink";
import PageTitle from "../../../../components/PageTitle";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const blogDirectory = path.join(process.cwd(), "posts");
  const { category } = await params;

  const allPostFilePaths = getPostFiles(blogDirectory);
  const blogs = allPostFilePaths.map((fullPath) => {
    const relativePath = path.relative(blogDirectory, fullPath);
    const slug = relativePath.replace(/\\/g, "/").replace(".mdx", "");

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontMatter } = matter(fileContents);
    const date = new Date(frontMatter.date);

    const actualDate = new Date(date);
    const formattedDate = formatDate(actualDate);
    return {
      slug,
      formattedDate,
      actualDate,
      meta: frontMatter as FrontMatter,
    };
  });

  const slugify = (text: string) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");
  };
  const processedBlogs = getPostList(blogs).filter(
    (blog) => slugify(blog.meta.Category) === category
  );

  // extract the category from the first post found
  const displayCategory =
    processedBlogs.length > 0 ? processedBlogs[0].meta.Category : category;

  return (
    <div>
      <PageTitle
        title={displayCategory}
        description={"Blog posts under " + displayCategory}
      />
      <div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row "></div>
          <div>
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
