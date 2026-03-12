import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">Projekte</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
