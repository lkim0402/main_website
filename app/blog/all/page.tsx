import PostLink from "../../../components/post/PostLink";
import PageTitle from "../../../components/PageTitle";
import BackButton from "../../../components/BackButton";
import { getAllPosts } from "../../lib/posts";

export default async function AllPostsPage() {
  const posts = getAllPosts();

  return (
    <div>
      <BackButton />
      <PageTitle title="All Posts" description={`${posts.length} posts`} />
      <div className="mb-5 border-b-2 border-dotted border-blue-300"></div>
      <ul>
        {posts.map((blog) => (
          <li key={blog.slug}>
            <PostLink
              path={blog.slug}
              date={blog.formattedDate}
              title={blog.meta.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
