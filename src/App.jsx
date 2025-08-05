import Profil from "./pages/Profil.jsx";
import About from "./pages/About.jsx";
import Experience from "./pages/Experience.jsx";
import ProjectCard from "./pages/Project.jsx";
import Footer from "./pages/Footer.jsx";

import projects from "./pages/project.js";

function App() {
  return (
    <>
      <div
        className="flex flex-col lg:flex-row px-8 py-12 lg:px-12 lg:py-16 min-h-screen"
        data-theme="dark"
      >
        <div className=" w-full lg:w-1/4 lg:fixed lg:h-screen">
          <Profil />
        </div>
        <div className=" w-full lg:w-3/4 lg:ml-[25%] p-6 ">
          <About />
          <Experience />
          <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
