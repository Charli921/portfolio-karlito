import { Mail } from 'lucide-react';
import { content } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-black py-24 md:py-32 px-6 flex items-center">
      <div className="max-w-3xl mx-auto w-full space-y-12 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
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

        <div className="pt-12 border-t border-gray-900">
          <p className="text-gray-700 text-xs tracking-widest">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}
