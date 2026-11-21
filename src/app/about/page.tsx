import type { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: `Conoce la formación y los intereses técnicos de ${personalInfo.name}, estudiante de Tecsup.`,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="shell py-12 sm:py-16">
      <h1 className="page-title mb-9">Sobre mí</h1>
      <section className="editorial-row">
        <h2 className="section-title">Formación</h2>
        <p className="max-w-prose leading-relaxed text-[var(--muted)]">Soy {personalInfo.name}, estudiante de Desarrollo de Software en Tecsup. Me interesa crear aplicaciones web y móviles, diseñar bases de datos y resolver problemas mediante la programación.</p>
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
