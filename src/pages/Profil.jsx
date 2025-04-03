import image from "../assets/image/anby.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Profil = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Fauzi Malik Nashrullah
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Web Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          "Berkembang itu wajib, berhenti itu pilihan."
        </p>
        <div className="space-x-4 my-6">
          <a href="https://github.com/Fauzi-kun/" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="scale-150 hover:scale-200"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/fauzi-malik-nashrullah-8a2ab2242/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="scale-150 hover:scale-200"
            />
          </a>
          <a href="https://www.instagram.com/tahukehidupan" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="scale-150 hover:scale-200"
            />
          </a>
        </div>
      </div>
      <div>
        <img
          src={image}
          alt="fauzi-malik-nashrullah"
          className="w-40 h-40 rounded-full sm:hidden"
        />
      </div>
    </div>
  );
};
export default Profil;
