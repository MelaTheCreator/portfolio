export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p>{project.description}</p>

      {project.learnings && (
        <p className="text-sm opacity-80">
          <strong>Learnings:</strong> {project.learnings}
        </p>
      )}

      <ul className="flex flex-wrap gap-2 text-sm">
        {project.tech.map((item) => (
          <li key={item} className="px-2 py-1 border rounded">
            {item}
          </li>
        ))}
      </ul>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm underline"
        >
          GitHub Repository
        </a>
      )}
      <br />

      {project.site && (
        <a
          href={project.site}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm underline"
        >
          Project Website
        </a>
      )}
    </div>
  );
}
