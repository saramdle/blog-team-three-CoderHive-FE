import Head from "next/head";
import Link from "next/link";

import Humans from "@/components/Main/humans";

export default function Home() {
  return (
    <>
      <Head>
        <title>CoderHive</title>
        <meta name="description" content="CoderHive : Find your co-coder!" />
      </Head>
      <div className="bg-white overflow-hidden">
        <div className="mx-auto p-20 pb-40 h-[calc(100vh-1rem)] max-w-7xl flex items-center max-lg:p-10 max-lg:flex-col max-lg:pb-0">
          <div className="mx-auto min-w-fit text-left lg:mx-0 lg:flex-auto lg:py-32">
            <h2
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl 
                opacity-0 animation-fill-forwards animate-appear-from-above"
            >
              함께 성장하세요.
              <br /> 지금 바로 모임을 시작해 보세요.
            </h2>
            <p
              className="mt-8 mb-4 text-lg leading-8 text-gray-700
                opacity-0 animation-fill-forwards animate-appear-from-above animation-delay-100"
            >
              같이 스터디와 사이드 프로젝트를 진행할 동료들을 찾기 힘드셨나요?
              <br />
              원하는 분야의 모임을 찾아보세요.
            </p>
            <Link
              href="/study"
              className="inline-block text-sm font-semibold leading-6 text-indigo-600 hover:translate-x-1 duration-75 ease-in"
            >
              모임 보러가기 <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="relative w-full h-full">
            <Humans />
          </div>
        </div>
      </div>
    </>
  );
}
