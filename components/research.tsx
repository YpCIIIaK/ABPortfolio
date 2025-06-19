export function Research() {
  const projects = [
    {
      title: "Machine Learning for Superconducting Qubit Hardware Design Automation",
      institution: "NCSU - Dr. Chen's Lab",
      period: "Jan 2025 - Present",
      description:
        "Refining ML models for multi-qubit superconducting systems and inverse design. Utilizing MLP and INN, expanding datasets, analyzing correlations, training for inverse design.",
      impact: "Potential impact: scalable quantum hardware solutions",
      current: true,
    },
    {
      title: "Quantum Perlin Noise Game",
      institution: "Personal Project",
      period: "2024",
      description: "2D game with quantum-generated Perlin noise for procedural terrain generation.",
      technologies: "Python, Quantum Computing, Game Development",
      current: false,
    },
  ]

  return (
    <section id="research" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-8">Research & Projects</h2>
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
