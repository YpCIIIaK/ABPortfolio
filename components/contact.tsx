"use client"

import { siteContent } from "@/config/content"
import { useInView } from "@/lib/animations"
import { Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  const [titleRef, titleInView] = useInView(0.1)
  const [contentRef, contentInView] = useInView(0.1)

  return (
    <section id="contact" className="py-24 px-8">
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
            <h2 className="text-3xl font-light text-gray-900 mb-8">{siteContent.contact.title}</h2>
          </div>

          <div
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 ease-out delay-200 ${
              contentInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            <p className="text-gray-600 leading-relaxed font-light">
              {siteContent.contact.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a
                  href={`mailto:${siteContent.personal.email}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {siteContent.personal.email}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-gray-400" />
                <a
                  href={siteContent.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Github className="w-5 h-5 text-gray-400" />
                <a
                  href={siteContent.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}