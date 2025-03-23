import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const FrontendSkills = [
    "React",
    "TailwindCSS",
    "TypeScript",
    "JavaScript",
    "Jquery",
  ];
  const BackendSkills = [
    "Node.JS",
    "MongoDB",
    "Express.js",
    "Java",
    "REST APIs",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent text-center from-blue-500 to-cyan-400">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {FrontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {BackendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  {" "}
                  <strong>
                    Bachelor's of Technology in Computer Science
                  </strong>{" "}
                  <br /> - JECRC University (2022-2026)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing, Operating System
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📜 Certifications</h3>
              <div className="space-y-4 text-gray-300">
                
                <div>
                  <h4 className="font-semibold text-lg">
                    Full-Stack Web Development - Udemy
                  </h4>
                  <p className="text-sm text-gray-400">
                    Completed a comprehensive course covering React, Node.js,
                    and MongoDB.
                  </p>
                  <a
                    href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-2f748be6-404c-48ff-852f-77dd89d21b7b.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm mt-2 inline-block"
                  >
                    📜 View Certificate
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Accenture Data Analytics and Visualization Job Simulation
                  </h4>
                  <p className="text-sm text-gray-400">
                    It deepened my understanding of data analysis techniques, visualization tools. 
                  </p>
                  <a
                    href="https://www.linkedin.com/posts/yash-samar-0o4_course-completion-activity-7234956181667004418-81WH?utm_source=share&utm_medium=member_ios&rcm=ACoAAD73AjIBDrzv03qooRptEeQvKFhqnttcZlw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm mt-2 inline-block"
                  >
                    📜 View Certificate
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Java Programming - Coursera
                  </h4>
                  <p className="text-sm text-gray-400">
                    Gained expertise in Java development, data structures, and
                    algorithms.
                  </p>
                  {/* <a
                    href="https://your-certificate-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm mt-2 inline-block"
                  >
                    📜 View Certificate
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
