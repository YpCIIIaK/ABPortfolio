"use client"

import { siteContent } from "@/config/content"
import { useInView } from "@/lib/animations"

export function Research() {
  const projects = siteContent.research.projects
  const [titleRef, titleInView] = useInView(0.1)
  const [projectsRef, projectsInView] = useInView(0.1)

  return (
    <section id="research" className="py-24 px-8">
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
            <h2 className="text-3xl font-light text-gray-900 mb-8">{siteContent.research.title}</h2>
          </div>

          <div
            ref={projectsRef}
            className="space-y-12"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`space-y-3 transition-all duration-1000 ease-out ${
                  projectsInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-16"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium text-gray-900 leading-tight max-w-sm">{project.title}</h3>
                  <span className="text-sm text-gray-500 font-light whitespace-nowrap">{project.period}</span>
                </div>

                <p className="text-sm text-gray-600 font-medium">{project.institution}</p>

                <p className="text-gray-600 font-light leading-relaxed">{project.description}</p>

                {project.impact && <p className="text-sm text-gray-600 font-light italic">{project.impact}</p>}

                {project.technologies && <p className="text-xs text-gray-500 font-light">{project.technologies}</p>}
                
                {project.videoUrl && (
                  <div className="mt-4">
                    <video controls className="w-full rounded-lg">
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
