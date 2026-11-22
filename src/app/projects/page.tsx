import type { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

const description = 'Proyectos de Calep Neyra Taype: Natzumi y Mathias, StudyMatch, RankClass, Biblioteca API y demostraciones académicas de desarrollo web.';

export const metadata: Metadata = {
  title: 'Proyectos',
  description,
  alternates: { canonical: '/projects' },
  openGraph: { title: 'Proyectos', description, url: '/projects', type: 'website' },
  twitter: { card: 'summary', title: 'Proyectos', description },
};

export default function ProjectsPage() {
  const portfolioProjects = projects.filter((project) => project.kind === 'project');
  const academicDemos = projects.filter((project) => project.kind === 'academic-demo');

  return (
    <div className="shell py-12 sm:py-16">
      <h1 className="page-title">Proyectos</h1>
      <section className="mt-8" aria-labelledby="featured-projects">
        <h2 id="featured-projects" className="section-title">Proyectos destacados</h2>
        <div className="mt-5 grid gap-x-6 gap-y-8 sm:grid-cols-2">
          {portfolioProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
      <section className="mt-12" aria-labelledby="academic-demos">
        <h2 id="academic-demos" className="section-title">Demostraciones académicas</h2>
        <div className="mt-5 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {academicDemos.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </div>
  );
}
