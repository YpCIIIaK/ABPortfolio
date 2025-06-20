import { siteContent } from "@/config/content"

export function Experience() {
  const experiences = siteContent.experience.positions

  return (
    <section id="experience" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-8">{siteContent.experience.title}</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-500 font-light">{exp.period}</span>
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
