export function Publications() {
  const publications = [
    {
      title: "Quantum Error Mitigation Techniques for Near-Term Quantum Devices",
      journal: "Journal of Quantum Information Science",
      year: "2023",
      authors: "A. Akchurin, I. Petrov, S. Sidorov",
    },
    {
      title: "Implementing Shor's Algorithm on a Superconducting Quantum Processor",
      journal: "Physical Review Letters",
      year: "2022",
      authors: "A. Akchurin, M. Ivanova",
    },
    {
      title: "Quantum Machine Learning: Challenges and Opportunities",
      journal: "Quantum Computing Review",
      year: "2021",
      authors: "A. Akchurin",
    },
  ]

  return (
    <section id="publications" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-8">Publications</h2>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium text-gray-900 leading-tight max-w-sm">{pub.title}</h3>
                  <span className="text-sm text-gray-500 font-light">{pub.year}</span>
                </div>

                <p className="text-sm text-gray-600 font-medium italic">{pub.journal}</p>

                <p className="text-sm text-gray-600 font-light">{pub.authors}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
