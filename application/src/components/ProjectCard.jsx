export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="mb-3">{project.description}</p>
      <ul className="flex gap-2 text-sm opacity-70">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
