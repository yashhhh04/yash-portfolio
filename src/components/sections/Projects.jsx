import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent text-center from-blue-500 to-cyan-400">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded -xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Tazza Website</h3>
              <p className="text-gray-400 mb-4">
                {" "}
                Developed an interactive multipage website using HTML,CSS and
                JavaScript. Designed based on statistical data analysis and
                optimized for visual appeal and functionality.
              </p>
              <div className="flex justify-between items-center my-4">
                <a
                  href="https://tazza-app.netlify.app/??"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded -xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">EV-olution Website</h3>
              <p className="text-gray-400 mb-4">
                {" "}
                Developed an interactive landing page for an E-Vehicle showcase website using React.js and modern UI libraries. Utilized React Router,Hooks and State Management to enhance interactivity. 
              </p>
              <div className="flex justify-between items-center my-4">
                <a
                  href="https://yashhhh04.github.io/EV-olution/"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
