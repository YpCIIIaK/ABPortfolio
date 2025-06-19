export function Hero() {
  return (
    <section className="pt-16 pb-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
              Physics Student &<br />
              Quantum Researcher
            </h1>

            <div className="max-w-lg">
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Research Assistant at NCSU specializing in quantum computing and machine learning for superconducting
                quantum systems. Innovating quantum hardware with AI.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#research"
                className="inline-block text-sm text-gray-900 border-b border-gray-900 pb-1 hover:border-gray-600 transition-colors"
              >
                View research work
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-80 md:w-96 md:h-96">
              <img
                src="/profile.jpg"
                alt="Abdrakhman Akchurin"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
