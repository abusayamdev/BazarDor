
import Image from "next/image";

export default function HomePage() {
  return (
    <section
      className="
        mx-auto w-full max-w-[1120px]
        px-4 py-10 sm:px-6
      "
    >
      <div
        className="
          grid items-center gap-8
          rounded-2xl bg-base-200
          p-6 sm:p-10
          md:grid-cols-2
        "
      >
        {/* Temporary Content */}
        <div>
          <p className="font-medium text-primary">
            আমাদের বাজার, আমাদের দর
          </p>

          <h1
            className="
              mt-4 text-3xl font-bold
              leading-tight text-base-content
              sm:text-4xl
            "
          >
            আজকের বাজারদর
            <span className="block text-primary">
              এক নজরে
            </span>
          </h1>

          
        </div>

        {/* Temporary Hero Image */}
        <div className="flex justify-center">
          <Image
            src="/images/bazar-hero.png"
            alt="Fresh grocery basket"
            width={315}
            height={263}
            priority
            className="h-auto w-full max-w-[315px]"
          />
        </div>
      </div>
    </section>
  );
}
