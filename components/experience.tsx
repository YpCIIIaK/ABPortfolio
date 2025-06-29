"use client"

import { siteContent } from "@/config/content"
import { useInView } from "@/lib/animations"

export function Experience() {
  const [titleRef, titleInView] = useInView(0.3)
  const [experiencesRef, experiencesInView] = useInView(0.3)

  const experiences = siteContent.experience.positions

  return (
    <section id="experience" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div
            ref={titleRef}
            className={`transition-all duration-1000 ease-out ${
              titleInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-8">{siteContent.experience.title}</h2>
          </div>

          <div
            ref={experiencesRef}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`space-y-2 transition-all duration-1000 ease-out ${
                  experiencesInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-16"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
                  <div className="ml-4">
                    <span className="text-sm text-gray-500 font-light whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 font-medium">{exp.organization}</p>

                <p className="text-gray-600 font-light leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
