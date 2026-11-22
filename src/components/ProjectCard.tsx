import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import ProjectLinks from './ProjectLinks';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border-t border-[var(--line)] pt-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">{project.status ?? 'Demo académica'}</p>
          <h3 className="mt-1 text-xl font-semibold">
            <Link href={`/projects/${project.slug}`} className="hover:underline hover:underline-offset-4">
              {project.title}
            </Link>
          </h3>
        </div>
        {project.image && (
          <Image {...project.image} alt="" sizes="56px" className="h-auto w-14 shrink-0" />
        )}
      </div>
      <p className="mt-2 leading-relaxed text-[var(--muted)]">{project.description}</p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{project.technologies.join(' · ')}</p>
      <ProjectLinks project={project} />
    </article>
  );
}
