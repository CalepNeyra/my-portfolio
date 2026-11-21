import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';

type ProjectCardProps = {
  project: Project;
  sizes: string;
  loading?: 'eager' | 'lazy';
};

export default function ProjectCard({ project, sizes, loading = 'lazy' }: ProjectCardProps) {
  return (
    <article>
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-neutral-200">
          <Image src={project.image} alt="" fill loading={loading} sizes={sizes}
            className="object-cover motion-safe:transition-opacity group-hover:opacity-90"
          />
        </div>
        <div className="mt-4">
          <p className="eyebrow">Demo académica</p>
          <h3 className="mt-1 text-xl font-semibold group-hover:underline group-hover:underline-offset-4">{project.title}</h3>
        </div>
      </Link>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>
      <p className="mt-3 border-t border-[var(--line)] pt-3 text-sm text-[var(--muted)]">{project.technologies.join(' · ')}</p>
    </article>
  );
}
