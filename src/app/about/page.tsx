import type { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

const description = `Formación e intereses técnicos de ${personalInfo.name}, estudiante de Desarrollo de Software en Tecsup.`;
const portraitUrl = personalInfo.portrait.src;

export const metadata: Metadata = {
  title: 'Sobre mí',
  description,
  alternates: { canonical: '/about' },
  openGraph: { title: 'Sobre mí', description, url: '/about', images: [portraitUrl] },
  twitter: { card: 'summary', title: 'Sobre mí', description, images: [portraitUrl] },
};

export default function AboutPage() {
  return (
    <div className="shell py-12 sm:py-16">
      <h1 className="page-title mb-9">Sobre mí</h1>
      <section className="editorial-row">
        <h2 className="section-title">Formación</h2>
        <div className="flex flex-wrap items-start justify-between gap-4 md:flex-nowrap">
          <p className="max-w-prose leading-relaxed text-[var(--muted)]">Soy {personalInfo.name}, estudiante de Desarrollo de Software en Tecsup. Me interesa crear aplicaciones web y móviles, diseñar bases de datos y resolver problemas mediante la programación.</p>
          <Image
            {...personalInfo.portrait}
            alt={`Retrato de ${personalInfo.name}`}
            sizes="96px"
            className="h-auto w-24 shrink-0 rounded-full"
          />
        </div>
      </section>
      <section className="editorial-row">
        <h2 className="section-title">Áreas de interés</h2>
        <ul className="grid gap-2 text-[var(--muted)] sm:grid-cols-2">
          {personalInfo.specialties.map((area) => <li key={area}>{area}</li>)}
        </ul>
      </section>
      <section className="editorial-row">
        <h2 className="section-title">Tecnologías</h2>
        <p className="text-sm leading-loose text-[var(--muted)]">{personalInfo.technologies.join(' · ')}</p>
      </section>
    </div>
  );
}
