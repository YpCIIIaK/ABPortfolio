import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Research } from "@/components/research"
import { Experience } from "@/components/experience"
import { Publications } from "@/components/publications"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        <Research />
        <Experience />
        <Publications />
        <Contact />
      </main>
    </div>
  )
}
