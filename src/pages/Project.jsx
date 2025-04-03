import project from "../assets/image/frontend-project.png";

const Project = () => {
  return (
    <div>
      <h2 className="my-2 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only sticky top-0 backdrop-blur z-10">
        Projects
      </h2>
      <ul className="space-y-4">
        <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img className="rounded-box w-full" src={project} />
          </div>
          <div>
            <div>Frontend Project</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Using React.js
            </div>
            <div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                officiis facilis? Architecto dolorum id rerum nam exercitationem
                qui facilis, aspernatur provident ut suscipit nemo ipsam itaque.
                Quis voluptatem suscipit nihil.
              </p>
            </div>
          </div>
        </li>
        <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img className="rounded-box w-full" src={project} />
          </div>
          <div>
            <div>Frontend Project</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Using React.js
            </div>
            <div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                officiis facilis? Architecto dolorum id rerum nam exercitationem
                qui facilis, aspernatur provident ut suscipit nemo ipsam itaque.
                Quis voluptatem suscipit nihil.
              </p>
            </div>
          </div>
        </li>
        <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img className="rounded-box w-full" src={project} />
          </div>
          <div>
            <div>Frontend Project</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Using React.js
            </div>
            <div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                officiis facilis? Architecto dolorum id rerum nam exercitationem
                qui facilis, aspernatur provident ut suscipit nemo ipsam itaque.
                Quis voluptatem suscipit nihil.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Project;
