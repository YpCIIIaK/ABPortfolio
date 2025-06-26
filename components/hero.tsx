"use client";

import { siteContent } from "@/config/content";
import { useInView } from "@/lib/animations";

export function Hero() {
  const [titleRef, titleInView] = useInView(0.2);
  const [subtitleRef, subtitleInView] = useInView(0.2);
  const [buttonsRef, buttonsInView] = useInView(0.2);
  const [imageRef, imageInView] = useInView(0.2);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Текстовый контент */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div
              ref={titleRef}
              className={`transition-all duration-1000 ease-out ${
                titleInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 leading-tight">
                {siteContent.personal.title.split(" &").map((part, i) => (
                  <span key={i} className="block">
                    {i === 0 ? part + " &" : part}
                  </span>
                ))}
              </h1>
            </div>

            <div
              ref={subtitleRef}
              className={`max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 ease-out delay-200 ${
                subtitleInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                {siteContent.personal.subtitle}
              </p>
            </div>

            <div
              ref={buttonsRef}
              className={`pt-4 sm:pt-8 flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center lg:justify-start transition-all duration-1000 ease-out delay-400 ${
                buttonsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              <a
                href="#research"
                className="inline-block text-sm sm:text-base text-gray-900 border-b border-gray-900 pb-1 hover:border-gray-600 hover:text-gray-600 transition-colors"
              >
                {siteContent.buttons.viewResearch}
              </a>
              <a
                href="#contact"
                className="inline-block text-sm sm:text-base text-gray-900 border-b border-gray-900 pb-1 hover:border-gray-600 hover:text-gray-600 transition-colors"
              >
                {siteContent.buttons.getInTouch}
              </a>
            </div>
          </div>

          {/* Изображение */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mt-10">
            <div
              ref={imageRef}
              className={`relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] transition-all duration-1000 ease-out delay-300 ${
                imageInView
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-16 scale-95"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl sm:rounded-3xl transform rotate-3 sm:rotate-6"></div>
              <img
                src={siteContent.personal.profileImage || "/placeholder.svg"}
                alt={siteContent.personal.name}
                className="relative w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator - скрыт на мобильных */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
