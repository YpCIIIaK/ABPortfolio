export function About() {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-8">About</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed font-light">
              My name is Abdrakhman Akchurin, and I am a physics student at North Carolina State University (NCSU).
              Originally from Kazakhstan, I am deeply fascinated by the transformative potential of quantum computing
              and am committed to contributing to its advancement.
            </p>

            <p className="text-gray-600 leading-relaxed font-light">
              My current efforts are focused on developing machine learning models to automate and optimize the hardware
              design processes for superconducting quantum computers. I work as a Research Assistant in Dr. Chen's Lab,
              where I'm developing ML models for both forward and inverse prediction in multi-element superconducting
              quantum computer designs.
            </p>

            <p className="text-gray-600 leading-relaxed font-light">
              My broader career aspiration is to leverage my physics background to contribute to the future of quantum
              computing, specifically by aiding in the development of practical and impactful quantum computers that can
              benefit the world.
            </p>

            <div className="pt-8 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Education</h3>
                <p className="text-sm text-gray-600 font-light">
                  Bachelor's of Science, Physics — North Carolina State University
                  <br />
                  Aug 2022 - May 2026, Raleigh, NC
                  <br />
                  GPA: 3.9
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Skills</h3>
                <p className="text-sm text-gray-600 font-light">
                  Machine Learning, Quantum Computing, Data Analysis, Python, LabView, MatLab, Mathematica, PyTorch,
                  Qiskit, Qiskit Metal
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Certifications</h3>
                <p className="text-sm text-gray-600 font-light">
                  CS50P: Introduction to Programming with Python
                  <br />
                  CS50AI: Introduction to Artificial Intelligence with Python
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
