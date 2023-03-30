import MiniPostCard from "../miniPostCard";
import { PostCardProps } from "../postCard";

type MyPostsProps = {
  hostingPosts: PostCardProps[];
  appliedPosts: PostCardProps[];
  participatedPosts: PostCardProps[];
};

export default function MyPosts({
  hostingPosts,
  appliedPosts,
  participatedPosts,
}: MyPostsProps) {
  const renderAppliedPost = appliedPosts.map((post) => {
    return (
      <MiniPostCard
        key={post.postId}
        postId={post.postId}
        status={post.status}
        title={post.title}
        location={post.location}
        like={post.like}
        likes={post.likes}
        imageUrl={post.imageUrl}
      />
    );
  });

  const renderParticipatedPosts = participatedPosts.map((post) => {
    return (
      <MiniPostCard
        key={post.postId}
        postId={post.postId}
        status={post.status}
        title={post.title}
        location={post.location}
        like={post.like}
        likes={post.likes}
        imageUrl={post.imageUrl}
      />
    );
  });

  const renderHostingPosts = hostingPosts.map((post) => {
    return (
      <MiniPostCard
        key={post.postId}
        postId={post.postId}
        status={post.status}
        title={post.title}
        location={post.location}
        like={post.like}
        likes={post.likes}
        imageUrl={post.imageUrl}
      />
    );
  });

  return (
    <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
      <h3 className="block mt-8 text-base font-bold leading-6 text-gray-900">
        내가 만든 모임
      </h3>
      <div
        className={`mt-2 p-4 flex items-center gap-x-4 h-72 overflow-x-scroll rounded-md 
        bg-gray-100`}
      >
        {renderHostingPosts}
      </div>
      <h3 className="block mt-8 text-base font-bold leading-6 text-gray-900">
        지원중인 모임
      </h3>
      <div
        className={`mt-2 p-4 flex items-center gap-x-4 h-72 overflow-x-scroll rounded-md 
        bg-gray-100`}
      >
        {renderAppliedPost}
      </div>
      <h3 className="block mt-8 text-base font-bold leading-6 text-gray-900">
        참여한 모임
      </h3>
      <div
        className={`mt-2 p-4 flex items-center gap-x-4 h-72 overflow-x-scroll rounded-md 
        bg-gray-100`}
      >
        {renderParticipatedPosts}
      </div>
    </div>
  );
}
