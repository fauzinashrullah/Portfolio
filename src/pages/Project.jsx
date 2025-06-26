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
          <div className="flex flex-col h-full">
            <div>
              <p>Spring Auth Project</p>
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Spring Boot
            </div>
            <div>
              <p className="text-xs">
                Sistem autentikasi backend berbasis token JWT. Menyediakan
                endpoint untuk register, login, dan akses protected route.
                Menggunakan Spring Security, JWT, PostgreSQL, dan struktur
                folder modular. Tujuan project ini adalah belajar implementasi
                login secure di backend menggunakan standar industri.
              </p>
            </div>
            <div className="mt-auto">
              <a
                href="https://github.com/fauzinashrullah/spring-auth"
                target="_blank"
                className="text-sm underline hover:text-red-500"
              >
                Github
              </a>
            </div>
          </div>
        </li>

        <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img className="rounded-box w-full" src={springCRUD} />
          </div>
          <div className="flex flex-col h-full">
            <div>
              <p>Spring CRUD Project</p>
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Spring Boot
            </div>
            <div>
              <p className="text-xs">
                RESTful API untuk operasi CRUD data produk. Dibuat menggunakan
                Spring Boot, PostgreSQL, dan JPA. Menggunakan arsitektur
                terpisah (Controller, Service, Repository) dengan validasi input
                dan error handling.
              </p>
            </div>
            <div className="mt-auto">
              <a
                href="https://github.com/fauzinashrullah/spring-simple-crud"
                target="_blank"
                className="text-sm underline hover:text-red-500"
              >
                Github
              </a>
            </div>
          </div>
        </li>

        <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <a href="https://video-belajar-sable.vercel.app/" target="_blank">
              <img className="rounded-box w-full" src={project} />
            </a>
          </div>
          <div className="flex flex-col h-full">
            <div>
              <a href="https://video-belajar-sable.vercel.app/" target="_blank">
                Frontend Video Belajar
              </a>
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              React.js
            </div>
            <div>
              <p className="text-xs">
                Web aplikasi pembelajaran video berbasis React.js. Fitur utama
                meliputi tampilan daftar video, tambah/edit/hapus video (CRUD)
                secara lokal tanpa backend/API. Menggunakan React Router untuk
                navigasi antar halaman dan localStorage untuk simulasi
                penyimpanan data. Proyek ini dibuat untuk latihan implementasi
                alur frontend CRUD dan simulasi autentikasi menggunakan JWT
                statis (dummy token). Fokus pada pengelolaan state, form
                handling, dan routing dalam React.
              </p>
            </div>
            <div className="mt-auto">
              <a
                href="https://github.com/Fauzi-kun/videoBelajar"
                target="_blank"
                className="text-sm underline hover:text-red-500"
              >
                Github
              </a>
            </div>
          </div>
        </li>
        <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img className="rounded-box w-full" src={beProject} />
          </div>
          <div className="flex flex-col h-full">
            <div>
              <p>Backend Project</p>
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Express.js
            </div>
            <div>
              <p className="text-xs">
                RESTful API independen untuk manajemen data video. Dibangun
                dengan Express.js dan JWT untuk autentikasi, dengan endpoint
                CRUD terproteksi. Tidak terintegrasi langsung dengan frontend,
                dibuat sebagai sistem terpisah untuk latihan backend standalone.
                Menerapkan middleware proteksi route, validasi data, dan
                struktur modular berbasis controller-service-model.
                <br />
                <br />
              </p>
            </div>
            <div className="mt-auto">
              <a
                href="https://github.com/Fauzi-kun/be_sign_in"
                target="_blank"
                className="underline hover:text-red-500 text-sm"
              >
                Github
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Project;
