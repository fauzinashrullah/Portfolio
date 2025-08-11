export default function Skills() {
  const skills = [
    {
      name: "Java",
      icon: "icons/java.svg",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Spring Boot",
      icon: "icons/spring.svg",
      color: "from-green-500 to-green-300",
    },
    {
      name: "Golang",
      icon: "icons/go.svg",
      color: "from-cyan-500 to-blue-400",
    },
    {
      name: "React.js",
      icon: "icons/react.svg",
      color: "from-sky-400 to-blue-600",
    },
    {
      name: "PostgreSQL",
      icon: "icons/postgresql.svg",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Git",
      icon: "icons/git.svg",
      color: "from-orange-400 to-red-400",
    },
  ];

  return (
    <section className="mb-12">
      <h2
        className="text-xl font-bold mb-6 pb-2 uppercase tracking-widest text-slate-200 sticky top-0 backdrop-blur z-10"
        id="skills"
      >
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative bg-gray-800/50 rounded-xl p-4 shadow-md hover:shadow-xl hover:scale-105 transition duration-200 border border-gray-700"
          >
            <div
              className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br ${skill.color} blur-lg`}
            ></div>
            <div className="relative flex flex-col items-center">
              <img src={skill.icon} alt={skill.name} className=" h-12" />
              <p className="mt-3 text-sm font-medium">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
