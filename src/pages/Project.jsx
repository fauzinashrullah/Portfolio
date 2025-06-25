import project from "../assets/image/frontend-project.png";
import beProject from "../assets/image/backend-project.png";
import springAuth from "../assets/image/spring-auth.png";
import springCRUD from "../assets/image/spring-crud.png";

const Project = () => {
  return (
    <div id="project">
      <h2 className="my-2 text-xl font-bold uppercase tracking-widest text-slate-200 lg:sr-only sticky top-0 backdrop-blur z-10">
        Projects
      </h2>
      <ul className="space-y-4">
        <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img className="rounded-box w-full" src={springAuth} />
          </div>
          <div>
            <div>
              <p>Spring Auth Project</p>
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Spring Boot
            </div>
            <div>
              <p className="text-xs">
                Membuat aplikasi Authentication menggunakan Spring Boot <br />
                <a
                  href="https://github.com/fauzinashrullah/spring-auth"
                  target="_blank"
                  className="mx-1 underline hover:text-red-500"
                >
                  link github
                </a>
              </p>
            </div>
          </div>
        </li>

        <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img className="rounded-box w-full" src={springCRUD} />
          </div>
          <div>
            <div>
              <p>Spring CRUD Project</p>
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Spring Boot
            </div>
            <div>
              <p className="text-xs">
                Membuat aplikasi CRUD menggunakan Spring Boot <br />
                <a
                  href="https://github.com/fauzinashrullah/spring-simple-crud"
                  target="_blank"
                  className="mx-1 underline hover:text-red-500"
                >
                  link github
                </a>
              </p>
            </div>
          </div>
        </li>

        <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <a href="https://video-belajar-sable.vercel.app/" target="_blank">
              <img className="rounded-box w-full" src={project} />
            </a>
          </div>
          <div>
            <div className="hover:scale-105">
              <a href="https://video-belajar-sable.vercel.app/" target="_blank">
                Frontend Video Belajar
              </a>
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              React.js
            </div>
            <div>
              <p className="text-xs">
                Membuat Frontend dari aplikasi Video Belajar Menggunakan
                React.js. <br />
                <a
                  href="https://github.com/Fauzi-kun/videoBelajar"
                  target="_blank"
                  className="mx-1 underline hover:text-red-500"
                >
                  link github
                </a>
              </p>
            </div>
          </div>
        </li>
        <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img className="rounded-box w-full" src={beProject} />
          </div>
          <div>
            <div>
              <p>Backend Project</p>
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Express.js
            </div>
            <div>
              <p className="text-xs">
                Membuat aplikasi backend menggunakan express.js <br />
                <a
                  href="https://github.com/Fauzi-kun/be_sign_in"
                  target="_blank"
                  className="mx-1 underline hover:text-red-500"
                >
                  link github
                </a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Project;
