
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto w-full max-w-[1152px] px-4"
    >
      <div className="grid min-h-[283px] grid-cols-1 items-center gap-8 rounded-2xl bg-base-200 px-6 py-10 sm:px-10 md:grid-cols-2 md:gap-10 lg:px-12">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}
