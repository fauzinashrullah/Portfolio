import image from "./assets/image/anby.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function App() {
  return (
    <>
      <div className="bg-blue-950 text-white ">
        <div className="bg-black opacity-60 p-6">
          <div className="flex justify-around">
            <div>
              <h1>Fauzi Malik Nashrullah</h1>
              <h3>Web Developer</h3>
              <h3>"Berkembang itu wajib, berhenti itu pilihan."</h3>
              <div className="space-x-2">
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
            <div>
              <img
                src={image}
                alt="fauzi-malik-nashrullah"
                className="w-40 h-40 rounded-full"
              />
            </div>
          </div>

          <div className="m-6 space-y-4">
            <h2>ABOUT</h2>
            <p>
              Saya adalah seorang Web Developer yang fokus di backend
              development dengan pengalaman menggunakan Golang, Laravel, dan
              Express.js. Dengan latar belakang sebagai mahasiswa semester 2 dan
              pengalaman mengikuti bootcamp Fullstack Developer di
              Harisenin.com, saya memiliki pemahaman yang kuat dalam membangun
              aplikasi web yang efisien dan scalable.
            </p>
            <p>
              Saya memiliki keahlian dalam mengembangkan sistem backend yang
              handal dengan database PostgreSQL, serta pengalaman menggunakan
              framework frontend seperti React, Vue, dan Next.js. Saya juga
              terbiasa menyelesaikan tantangan teknis yang kompleks dan selalu
              mencari cara untuk mengoptimalkan performa aplikasi. Selain itu,
              saya pernah terlibat dalam proyek KRTI-RP sebagai bagian dari
              divisi elektronik, yang semakin memperkuat kemampuan saya dalam
              problem-solving dan teamwork.
            </p>
            <p>
              Saya selalu berusaha untuk terus berkembang dengan mempelajari
              teknologi baru dan meningkatkan keterampilan saya dalam
              pengembangan sistem. Saat ini, saya tertarik untuk lebih mendalami
              arsitektur backend yang scalable dan berkontribusi dalam
              proyek-proyek yang berdampak besar.
            </p>
          </div>
          <div className="m-6 space-y-4">
            <h2>EXPERIENCE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus voluptas ullam quas deserunt sed facilis tempora odit
              libero nam laudantium sequi, aspernatur expedita aut magni vel
              ipsa laborum nobis molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus voluptas ullam quas deserunt sed facilis tempora odit
              libero nam laudantium sequi, aspernatur expedita aut magni vel
              ipsa laborum nobis molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus voluptas ullam quas deserunt sed facilis tempora odit
              libero nam laudantium sequi, aspernatur expedita aut magni vel
              ipsa laborum nobis molestiae.
            </p>
          </div>
          <div className="m-6 space-y-4">
            <h2>PROJECTS</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              repellendus eligendi dignissimos labore at quod itaque debitis,
              porro, corporis eius tenetur quia explicabo eum nisi asperiores
              blanditiis autem. Libero, doloremque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus voluptas ullam quas deserunt sed facilis tempora odit
              libero nam laudantium sequi, aspernatur expedita aut magni vel
              ipsa laborum nobis molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus voluptas ullam quas deserunt sed facilis tempora odit
              libero nam laudantium sequi, aspernatur expedita aut magni vel
              ipsa laborum nobis molestiae.
            </p>
          </div>
          <div className="m-6">
            <p>Built with React.js and Tailwind CSS, deployed with Vercel.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
