import { siteContent } from "@/config/content"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-8">{siteContent.contact.title}</h2>
          </div>

          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed font-light">{siteContent.contact.description}</p>

            <div className="space-y-2">
              <p>
                <span className="text-gray-600 font-light">Email: </span>
                <a
                  href={`mailto:${siteContent.personal.email}`}
                  className="text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-900 hover:border-gray-600 pb-1"
                >
                  {siteContent.personal.email}
                </a>
              </p>

              <p>
                <span className="text-gray-600 font-light">LinkedIn: </span>
                <a
                  href={siteContent.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-900 hover:border-gray-600 pb-1"
                >
                  {siteContent.personal.linkedin.replace("https://", "")}
                </a>
              </p>

              <p>
                <span className="text-gray-600 font-light">GitHub: </span>
                <a
                  href={siteContent.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-900 hover:border-gray-600 pb-1"
                >
                  {siteContent.personal.github.replace("https://", "")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
