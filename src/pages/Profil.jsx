import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
        <div className="flex-col my-20 gap-3 uppercase  hidden lg:flex">
          <a href="#about" className="hover:scale-110">
            about
          </a>
          <a href="#experience" className="hover:scale-110">
            experience
          </a>
          <a href="#project" className="hover:scale-110">
            project
          </a>
        </div>
        <div className="space-x-4 my-6">
          <a
            href="https://github.com/Fauzi-kun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              title="Fauzi-kun"
              className="scale-150 hover:scale-200"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/fauzi-malik-nashrullah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              title="/in/fauzi-malik-nashrullah"
              className="scale-150 hover:scale-200"
            />
          </a>
          <a
            href="https://www.instagram.com/tahukehidupan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              title="@tahukehidupan"
              className="scale-150 hover:scale-200"
            />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fauzimalik08@gmail.com&su=Halo%20Fauzi&body=Halo%2C%20saya%20tertarik%20dengan%20portofolio%20Anda.%0ABolehkah%20kita%20diskusi%20lebih%20lanjut%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              title="fauzimalik08@gmail.com"
              className="scale-150 hover:scale-200"
            />
          </a>
          <a
            href="http://wa.me/+6285861198373?text=Halo%2C%20saya%20tertarik%20dengan%20portofolio%20Anda.%20Bolehkah%20kita%20berdiskusi%20lebih%20lanjut%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              title="085861198373"
              className="scale-150 hover:scale-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Profil;
