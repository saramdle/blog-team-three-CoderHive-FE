import MiniPostCard from "../common/miniPostCard";

import { MyPostData } from "@/api/memberAPI";

type MyPostsProps = {
  hostingPosts: MyPostData[];
  appliedPosts: MyPostData[];
  participatedPosts: MyPostData[];
};

export default function MyPosts({
  hostingPosts,
  appliedPosts,
  participatedPosts,
}: MyPostsProps) {
  const renderAppliedPost = appliedPosts?.map((post) => {
    return (
      <MiniPostCard
        key={post.id}
        postId={post.id}
        status={post.postStatus}
        title={post.title}
        location={post.location}
        like={post.likeBoolean}
        likes={post.likes}
        imageUrl={post.thumbImageUrl}
      />
    );
  });

  const renderParticipatedPosts = participatedPosts?.map((post) => {
    return (
      <MiniPostCard
        key={post.id}
        postId={post.id}
        status={post.postStatus}
        title={post.title}
        location={post.location}
        like={post.likeBoolean}
        likes={post.likes}
        imageUrl={post.thumbImageUrl}
      />
    );
  });

  const renderHostingPosts = hostingPosts?.map((post) => {
    return (
      <MiniPostCard
        key={post.id}
        postId={post.id}
        status={post.postStatus}
        title={post.title}
        location={post.location}
        like={post.likeBoolean}
        likes={post.likes}
        imageUrl={post.thumbImageUrl}
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
