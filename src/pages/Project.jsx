// src/components/ProjectCard.jsx
const Project = ({ title, description, techStack, github, live, image }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-200">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {techStack.map((tech, index) => (
          <span key={index} className="text-sm bg-gray-800 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
