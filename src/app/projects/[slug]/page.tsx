import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

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

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.image],
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
        <p className="eyebrow">Demo académica · Laboratorio 14</p>
        <h1 className="page-title mt-2 mb-5">{project.title}</h1>
        <p className="lede mb-6">{project.description}</p>
        <div className="relative mb-8 aspect-[16/9] max-h-96 w-full overflow-hidden rounded-sm bg-neutral-200">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1056px) 992px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
            loading="eager"
            className="object-cover"
          />
        </div>
        <div className="editorial-row">
          <h2 className="section-title">Tecnologías</h2>
          <p className="text-sm leading-loose text-[var(--muted)]">{project.technologies.join(' · ')}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-link">
              Ver Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link">
              Ver Código
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
