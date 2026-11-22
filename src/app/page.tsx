import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { personalInfo, projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="shell">
      <section className="grid items-center gap-5 py-12 sm:grid-cols-[1fr_auto] sm:gap-10 sm:py-16">
        <div>
          <h1 className="page-title">{personalInfo.name}</h1>
          <p className="mt-3 text-lg font-medium">{personalInfo.title}.</p>
          <p className="lede">{personalInfo.description}</p>
          <div className="mt-4 flex flex-wrap gap-x-6">
            <Link href="/projects" className="text-link">Proyectos</Link>
            <Link href="/about" className="text-link">Sobre mí</Link>
            <Link href="/contact" className="text-link">Contacto</Link>
          </div>
        </div>
        <Image
          {...personalInfo.portrait}
          alt={`Retrato de ${personalInfo.name}`}
          sizes="(min-width: 640px) 152px, 112px"
          loading="eager"
          className="h-auto w-28 rounded-full sm:w-[152px]"
        />
      </section>
      <section className="border-t border-[var(--line)] py-8 sm:py-10">
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-5">
          <h2 className="section-title">Proyectos destacados</h2>
          <Link href="/projects" className="text-link">Ver todos</Link>
        </div>
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="editorial-row">
        <h2 className="section-title">Habilidades</h2>
        <p className="text-sm leading-loose text-[var(--muted)]">{personalInfo.technologies.join(' · ')}</p>
      </section>
    </div>
  );
}
