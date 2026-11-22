import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import ProjectLinks from '@/components/ProjectLinks';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return { title: 'Proyecto no encontrado' };
  }

  const url = `/projects/${project.slug}`;
  const images = project.image ? [project.image.src] : undefined;

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.description,
      url,
      images,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: project.title,
      description: project.description,
      images,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="shell py-12 sm:py-16">
      <Link href="/projects" className="text-link mb-5">
        Volver a proyectos
      </Link>
      <article>
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4 sm:flex-nowrap">
          <div>
            <p className="eyebrow">{project.status ?? 'Demo académica · Laboratorio 14'}</p>
            <h1 className="page-title mt-2">{project.title}</h1>
            <p className="lede">{project.description}</p>
          </div>
          {project.image && (
            <Image {...project.image} alt="" sizes="96px" className="h-auto w-24 shrink-0" />
          )}
        </div>
        <div className="editorial-row">
          <h2 className="section-title">Tecnologías</h2>
          <p className="text-sm leading-loose text-[var(--muted)]">{project.technologies.join(' · ')}</p>
        </div>
        {project.progress && (
          <section className="editorial-row">
            <h2 className="section-title">Avance documentado</h2>
            <p className="max-w-prose leading-relaxed text-[var(--muted)]">{project.progress}</p>
          </section>
        )}
        {project.planned && (
          <section className="editorial-row">
            <h2 className="section-title">Funcionalidades previstas</h2>
            <p className="max-w-prose leading-relaxed text-[var(--muted)]">{project.planned}</p>
          </section>
        )}
        <ProjectLinks project={project} />
      </article>
    </div>
  );
}
