import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">Projekte</h2>

      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.title}>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
