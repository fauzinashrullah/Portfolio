import Profil from "./pages/Profil.jsx";
import About from "./pages/About.jsx";
import Experience from "./pages/Experience.jsx";
import Project from "./pages/Project.jsx";
import Footer from "./pages/Footer.jsx";
function App() {
  return (
    <>
      {/* <div className="bg-blue-950 text-white ">
        <div className="bg-black opacity-60 p-12"> */}
      <Profil />
      <About />
      <Experience />
      <Project />
      <Footer />
      {/* </div>
      </div> */}
    </>
  );
}

export default App;
