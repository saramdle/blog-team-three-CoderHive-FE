import Image from "next/image";

export default function NotFound() {
  return (
    <section className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-2xl font-semibold text-indigo-600">Not Found</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          해당하는 게시물을 찾을 수 없습니다
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          필터를 조정해 보세요
        </p>
      </div>
    </section>
  );
}
