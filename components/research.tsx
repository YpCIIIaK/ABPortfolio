import { siteContent } from "@/config/content"

export function Research() {
  const projects = siteContent.research.projects

  return (
    <section id="research" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-8">{siteContent.research.title}</h2>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium text-gray-900 leading-tight max-w-sm">{project.title}</h3>
                  <span className="text-sm text-gray-500 font-light">{project.period}</span>
                </div>

                <p className="text-sm text-gray-600 font-medium">{project.institution}</p>

                <p className="text-gray-600 font-light leading-relaxed">{project.description}</p>

                {project.impact && <p className="text-sm text-gray-600 font-light italic">{project.impact}</p>}

                {project.technologies && <p className="text-xs text-gray-500 font-light">{project.technologies}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
