const Experience = () => {
  return (
    <div className="my-6 ">
      <h2 className="text-lg font-black">EXPERIENCE</h2>
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
            Mempelajari dan mengerjakan proyek menggunakan MERN Stack, Laravel,
            dan PostgreSQL, serta memahami konsep CI/CD dan deployment aplikasi
            web. Berlatih dalam tim untuk membangun solusi berbasis web yang
            optimal.
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
            Bekerja selama 13 bulan dalam produksi komponen otomotif dengan
            standar kualitas tinggi, serta meningkatkan efisiensi kerja dengan
            memahami sistem produksi yang lebih optimal.
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
            Industri, mempelajari dasar-dasar teknik dan mendapatkan pengalaman
            praktik industri yang mendukung keterampilan teknis serta
            problem-solving.
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};
export default Experience;
