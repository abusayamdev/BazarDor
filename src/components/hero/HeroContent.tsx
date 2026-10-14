export default function HeroContent() {
  return (
    <div className="text-center md:text-left">
      <p className="text-sm font-semibold text-primary">
        আমাদের বাজার, আমাদের দর
      </p>

      <h1
        id="hero-heading"
        className="mt-3 text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-[42px]"
      >
        আজকের বাজারদর
        <span className="block text-primary">এক নজরে</span>
      </h1>

      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-base-content/70 md:mx-0 sm:text-base">
        নিত্যপ্রয়োজনীয় পণ্যের সর্বশেষ বাজারদর, দামের পরিবর্তন এবং বাজারের তথ্য
        জানুন সহজেই, এক জায়গায়।
      </p>

      <a
        href="#সব-পণ্য"
        className="btn btn-primary btn-sm mt-6 rounded-lg px-5 sm:btn-md"
      >
        সব পণ্য দেখুন
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
