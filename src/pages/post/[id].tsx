import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-16">
      <div className="mb-10 px-8 pb-8 border-b border-gray-200">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          스터디
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          프론트엔드 개발자 구함!
        </h1>
        <h3 className="mt-4 mb-2 text-base text-gray-700">프론트엔드 개발</h3>
        <span className="text-base text-gray-700">서울 / 경기</span>
        <div className="mt-6 px-4 py-1 w-fit text-base rounded-md border">
          모집중
        </div>
      </div>

      <div className="px-8 grid gap-y-16 gap-x-8">
        <div className="lg:sticky lg:top-4 lg:col-start-2 lg:row-start-1 lg:w-80">
          사이드 자리
        </div>
        <div className="">
          <div className="text-base leading-7 text-gray-700">
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
              sed turpis id.
            </p>
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Push to deploy.
                  </strong>{" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    SSL certificates.
                  </strong>{" "}
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Database backups.
                  </strong>{" "}
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
              odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
              diam tincidunt ac cursus in vel. Mauris varius vulputate et
              ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
              ut. Ac lorem vel integer orci.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              No server? No problem.
            </h2>
            <p className="mt-6">
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
              consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
              vitae interdum mauris enim, consequat vulputate nibh. Maecenas
              pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
              cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
              ipsum eu a sed convallis diam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
