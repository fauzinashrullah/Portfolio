import Profil from "./pages/Profil.jsx";
import About from "./pages/About.jsx";
import Experience from "./pages/Experience.jsx";
import Project from "./pages/Project.jsx";
import Footer from "./pages/Footer.jsx";
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
        <div className=" w-full lg:w-3/4 lg:ml-[25%] p-6">
          <About />
          <Experience />
          <Project />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
