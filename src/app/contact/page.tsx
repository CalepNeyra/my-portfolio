import type { Metadata } from 'next';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Página de contacto del portafolio académico de ${personalInfo.name}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <section className="shell py-12 sm:py-16">
      <h1 className="page-title">Contacto</h1>
      <p className="lede mb-8">Aún no hay un correo ni perfiles de contacto publicados en este portafolio.</p>
      <div className="flex flex-wrap gap-x-6 border-t border-[var(--line)] pt-4">
        <Link href="/about" className="text-link">Ver perfil académico</Link>
        <Link href="/projects" className="text-link">Ver proyectos</Link>
      </div>
    </section>
  );
}
