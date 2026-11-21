import type { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

const description = 'Demostraciones académicas de desarrollo web del Laboratorio 14 en el portafolio de Calep Neyra Taype.';

export const metadata: Metadata = {
  title: 'Proyectos',
  description,
  alternates: { canonical: '/projects' },
  openGraph: { title: 'Proyectos académicos', description, url: '/projects', type: 'website', images: [projects[0].image] },
  twitter: { card: 'summary_large_image', title: 'Proyectos académicos', description, images: [projects[0].image] },
};

export default function ProjectsPage() {
  return (
    <section className="shell py-12 sm:py-16">
      <h1 className="page-title">Proyectos</h1>
      <p className="lede">Tres demostraciones académicas para explorar comercio electrónico, gestión de tareas y visualización de datos meteorológicos.</p>
      <h2 className="sr-only">Demostraciones del Laboratorio 14</h2>
      <div className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            loading={index === 0 ? 'eager' : 'lazy'}
            sizes="(min-width: 1056px) 315px, (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 640px) calc(50vw - 44px), calc(100vw - 40px)"
          />
        ))}
      </div>
    </section>
  );
}
