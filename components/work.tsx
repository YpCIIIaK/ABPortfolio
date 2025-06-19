import { siteContent } from "@/config/content"

export function Work() {
  const projects = [
    {
      title: "E-Commerce Platform",
      year: "2024",
      description: "A modern e-commerce solution with real-time inventory management",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Task Management App",
      year: "2024",
      description: "Collaborative task management with real-time updates",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      year: "2023",
      description: "Beautiful weather dashboard with interactive maps",
      tags: ["Vue.js", "Chart.js", "API Integration"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      year: "2023",
      description: "Minimalist portfolio showcasing design and development work",
      tags: ["React", "Tailwind", "Framer Motion"],
      link: "#",
    },
  ]

  return (
    <section id="work" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-8">Selected Work</h2>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <a href={project.link} className="block">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-500 font-light">{project.year}</span>
                    </div>

                    <p className="text-gray-600 font-light leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs text-gray-500 font-light">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}

            <div className="pt-8">
              <a
                href="#"
                className="inline-block text-sm text-gray-900 border-b border-gray-900 pb-1 hover:border-gray-600 hover:text-gray-600 transition-colors"
              >
                {siteContent.buttons.viewAllProjects}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
