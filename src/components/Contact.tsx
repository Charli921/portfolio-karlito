import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import Reveal from './Reveal';
import LogoSignature from './LogoSignature';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-black py-24 md:py-32 px-6 flex items-center">
      <Reveal className="max-w-3xl mx-auto w-full space-y-12 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-wide">
          Contact
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
          {content.contact.text}
        </p>

        <div className="space-y-6">
          <a
            href={`mailto:${content.contact.email}`}
            className="inline-flex items-center gap-3 text-xl md:text-2xl text-white hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:underline underline-offset-8"
          >
            <Mail size={24} />
            <span className="font-light tracking-wide">{content.contact.email}</span>
          </a>
        </div>

        <div className="pt-12 border-t border-gray-900 space-y-8">
          <LogoSignature />
          <p className="text-gray-700 text-xs tracking-widest">
            © {new Date().getFullYear()}
          </p>
          <Link
            to="/mentions-legales"
            className="inline-block text-xs text-gray-500 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white focus:underline underline-offset-4"
          >
            Mentions légales
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
