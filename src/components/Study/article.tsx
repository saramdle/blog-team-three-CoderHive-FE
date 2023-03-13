export default function StudyArticle() {
  return (
    <article className="p-4 flex max-w-xl flex-col items-start justify-between rounded-md border border-gray-600 hover:shadow-lg hover:ease-in duration-200">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime="2020-03-16" className="text-gray-500">
          Mar 16, 2020
        </time>
        <a
          href="#"
          className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
        >
          Marketing
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href="#">
            <span className="absolute inset-0"></span>
            Boost your conversion rate
          </a>
        </h3>
        <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
          Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
          vitae illo. Non aliquid explicabo necessitatibus unde. Sed
          exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti
          dicta.
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href="#">
              <span className="absolute inset-0"></span>
              Michael Foster
            </a>
          </p>
          <p className="text-gray-600">Co-Founder / CTO</p>
        </div>
      </div>
    </article>
  );
}
