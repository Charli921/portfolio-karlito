/**
 * Signature de réalisateur en bas de page : le logo seul, centré, taille modeste.
 */
export default function LogoSignature() {
  return (
    <img
      src="/assets/d.png"
      alt="Charles Dutel"
      width={112}
      height={112}
      /* Logo fourni sur fond blanc -> forcé en blanc pour s'intégrer au fond noir */
      style={{ filter: 'brightness(0) invert(1)' }}
      className="mx-auto h-24 w-auto opacity-50 hover:opacity-90 transition-opacity duration-700 select-none"
      loading="lazy"
    />
  );
}
