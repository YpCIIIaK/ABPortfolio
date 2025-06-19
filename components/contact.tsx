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

            <div className="space-y-4">
              <div>
                <a
                  href={`mailto:${siteContent.personal.email}`}
                  className="text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-900 hover:border-gray-600 pb-1"
                >
                  {siteContent.personal.email}
                </a>
              </div>

              <div className="flex space-x-8">
                {siteContent.contact.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
