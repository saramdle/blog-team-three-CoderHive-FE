import Head from "next/head";
import StudyArticle from "@/components/Study/article";

export default function Home() {
  return (
    <>
      <Head>
        <title>CoderHive</title>
        <meta name="description" content="CoderHive : Find your co-coder" />
      </Head>
      <main>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                스터디
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                함께 공부하고 성장해갈 스터디를 찾아보세요
              </p>
            </div>
            <div className="mx-auto mt-10 grid grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 sm:grid-cols-2 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              <StudyArticle />
              <StudyArticle />
              <StudyArticle />
              <StudyArticle />
              <StudyArticle />
              <StudyArticle />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
