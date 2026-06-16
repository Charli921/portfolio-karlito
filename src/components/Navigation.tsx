import { useEffect, useRef, useState } from 'react';

const navLinks = [
  { label: 'Films', href: '#films' },
  { label: 'Regard', href: '#regard' },
  { label: 'Contact', href: '#contact' }
];

export default function Navigation() {
  // Masquée par défaut : n'apparaît que lorsqu'on scrolle vers le haut.
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        // En haut de page : masquée
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scroll vers le haut : visible
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scroll vers le bas : masquée
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-hidden={!isVisible}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-black/40 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <ul className="flex justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm tracking-wide text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white focus:underline underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
