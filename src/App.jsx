import image from "./assets/image/anby.jpg";
import project from "./assets/image/frontend-project.png";
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
          <div className="m-6 ">
            <h2>EXPERIENCE</h2>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2024</time>
                  <div className="text-lg font-black">
                    Bootcamp Fullstack Developer - Harisenin.com
                  </div>
                  Mempelajari dan mengerjakan proyek menggunakan MERN Stack,
                  Laravel, dan PostgreSQL, serta memahami konsep CI/CD dan
                  deployment aplikasi web. Berlatih dalam tim untuk membangun
                  solusi berbasis web yang optimal.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">2022</time>
                  <div className="text-lg font-black">
                    Operator Produksi - PT Musashi Auto Parts Indonesia
                  </div>
                  Bekerja selama 13 bulan dalam produksi komponen otomotif
                  dengan standar kualitas tinggi, serta meningkatkan efisiensi
                  kerja dengan memahami sistem produksi yang lebih optimal.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2019</time>
                  <div className="text-lg font-black">
                    SMKN 2 Banjar - Teknik Elektronika Industri
                  </div>
                  Menempuh pendidikan di SMK dengan jurusan Teknik Elektronika
                  Industri, mempelajari dasar-dasar teknik dan mendapatkan
                  pengalaman praktik industri yang mendukung keterampilan teknis
                  serta problem-solving.
                </div>
                <hr />
              </li>
            </ul>
          </div>
          <div className="m-6 space-y-4">
            <h2>PROJECTS</h2>
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In, officiis facilis? Architecto dolorum id rerum nam
                      exercitationem qui facilis, aspernatur provident ut
                      suscipit nemo ipsam itaque. Quis voluptatem suscipit
                      nihil.
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In, officiis facilis? Architecto dolorum id rerum nam
                      exercitationem qui facilis, aspernatur provident ut
                      suscipit nemo ipsam itaque. Quis voluptatem suscipit
                      nihil.
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In, officiis facilis? Architecto dolorum id rerum nam
                      exercitationem qui facilis, aspernatur provident ut
                      suscipit nemo ipsam itaque. Quis voluptatem suscipit
                      nihil.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
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
