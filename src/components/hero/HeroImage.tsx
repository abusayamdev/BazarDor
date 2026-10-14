import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex w-full items-center justify-center md:justify-end">
      <Image
        src="/images/bazar-hero.png"
        alt="নিত্যপ্রয়োজনীয় বাজারের পণ্যে ভরা ঝুড়ি"
        width={315}
        height={263}
        priority
        sizes="(max-width: 767px) 85vw, 315px"
        className="h-auto w-full max-w-[315px] object-contain"
      />
    </div>
  );
}
