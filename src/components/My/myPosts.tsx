import MiniPostCard from "../miniPostCard";
import { PostCardProps } from "../postCard";

type MyPostsProps = {
  appliedPosts: PostCardProps[];
  inProgressPosts: PostCardProps[];
  completePosts: PostCardProps[];
};

export default function MyPosts({
  appliedPosts,
  inProgressPosts,
  completePosts,
}: MyPostsProps) {
  const renderAppliedPost = appliedPosts.map((post) => {
    return (
      <MiniPostCard
        key={post.postId}
        postId={post.postId}
        status={post.status}
        field={post.field}
        title={post.title}
        location={post.location}
        likes={post.likes}
        hasImg={post.hasImg}
      />
    );
  });

  const renderInProgressPost = inProgressPosts.map((post) => {
    return (
      <MiniPostCard
        key={post.postId}
        postId={post.postId}
        status={post.status}
        field={post.field}
        title={post.title}
        location={post.location}
        likes={post.likes}
        hasImg={post.hasImg}
      />
    );
  });

  const renderCompletePost = completePosts.map((post) => {
    return (
      <MiniPostCard
        key={post.postId}
        postId={post.postId}
        status={post.status}
        field={post.field}
        title={post.title}
        location={post.location}
        likes={post.likes}
        hasImg={post.hasImg}
      />
    );
  });

  return (
    <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
      <h3 className="block text-base font-semibold leading-6 text-gray-900">
        지원중인 모임
      </h3>
      <div
        className={`mt-2 p-4 flex items-center gap-x-2 h-72 overflow-x-auto rounded-md bg-gray-100`}
      >
        {renderAppliedPost}
      </div>
      <h3 className="block mt-8 text-base font-semibold leading-6 text-gray-900">
        진행중인 모임
      </h3>
      <div
        className={`mt-2 p-4 flex items-center gap-x-2 h-72 overflow-x-auto rounded-md bg-gray-100`}
      >
        {renderInProgressPost}
      </div>
      <h3 className="block mt-8 text-base font-semibold leading-6 text-gray-900">
        완료된 모임
      </h3>
      <div
        className={`mt-2 p-4 flex items-center gap-x-2 h-72 overflow-x-auto rounded-md bg-gray-100`}
      >
        {renderCompletePost}
      </div>
    </div>
  );
}
