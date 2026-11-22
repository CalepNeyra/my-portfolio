import type { Project } from '@/types';

export default function ProjectLinks({ project }: { project: Project }) {
  if (!project.githubUrl && !project.demoUrl) return null;

  return (
    <div className="flex flex-wrap gap-x-4">
      {project.githubUrl && (
        <a href={project.githubUrl} className="text-link" aria-label={`${project.title} en GitHub`}>GitHub</a>
      )}
      {project.demoUrl && (
        <a href={project.demoUrl} className="text-link" aria-label={`Demostración de ${project.title}`}>Ver demo</a>
      )}
    </div>
  );
}
