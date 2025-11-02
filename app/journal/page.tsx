import { Post } from "../../types/post";
import PostBox from "../../components/post/PostLink";
import PageTitle from "../../components/PageTitle";

export const revalidate = 30; // Recheck every 30 seconds

export default async function Workshop() {
  let posts: Post[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
      {
        next: { revalidate: 30 },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }
    console.log("fetched posts in workshop/page");
    posts = await response.json();
  } catch (e) {
    if (e instanceof Error) {
      console.log("Failed to fetch posts: ", e);
    }
  }

  return (
    <div>
      <PageTitle
        title="Journal"
        description="personal thoughts, ideas, notes, etc."
      />
      {
        <div>
          {posts.length === 0 ? (
            <p className="italic text-gray-500 text-center">
              No posts available yet :)
            </p>
          ) : (
            <div
              className="flex justify-center

            "
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
              gap-10
              justify-items-center"
              >
                {posts
                  .filter(
                    (post: Post) =>
                      post.category == "Journal" && post.status === "Published"
                    // || post.category == "Workshop"
                    // || post.category == "Draft"
                  )
                  .map((post: Post) => (
                    <PostBox {...post} key={post._id} />
                  ))}
              </div>
            </div>
          )}
        </div>
      }
    </div>
  );
}
