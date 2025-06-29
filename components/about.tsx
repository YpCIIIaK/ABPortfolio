"use client"

import { siteContent } from "@/config/content"
import { useInView } from "@/lib/animations"

export function About() {
  const [titleRef, titleInView] = useInView(0.1)
  const [contentRef, contentInView] = useInView(0.1)

  return (
    <section id="about" className="py-24 px-8">
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
            <h2 className="text-3xl font-light text-gray-900 mb-8">{siteContent.about.title}</h2>
          </div>

          <div
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 ease-out delay-200 ${
              contentInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            {siteContent.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed font-light">
                {paragraph}
              </p>
            ))}

            <div className="pt-8 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">{siteContent.about.education.title}</h3>
                <p className="text-sm text-gray-600 font-light">
                  {siteContent.about.education.degree}
                  <br />
                  {siteContent.about.education.date}
                  <br />
                  GPA: {siteContent.about.education.gpa}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Skills</h3>
                <p className="text-sm text-gray-600 font-light">{siteContent.about.skills.list}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
