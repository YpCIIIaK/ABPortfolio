import { siteContent } from "@/config/content"

export function About() {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-8">{siteContent.about.title}</h2>
          </div>

          <div className="space-y-6">
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

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Certifications</h3>
                <p className="text-sm text-gray-600 font-light">
                  {siteContent.about.certifications.list.map((cert, index) => (
                    <span key={index}>
                      {cert}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
