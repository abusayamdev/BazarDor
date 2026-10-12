
import BrandLogo from "./BrandLogo";
import AuthButtons from "./AuthButtons";

export default function Navbar() {
  return (
    <header
      className="
        w-full border-b
        border-base-300
        bg-base-100
      "
    >
      <div
        className="
          mx-auto flex h-[68px]
          w-full max-w-[1152px]
          items-center justify-between
          gap-2 px-4
        "
      >
        {/* Left: Logo + Date */}
        <BrandLogo />

        {/* Right: Authentication */}
        <AuthButtons />
      </div>
    </header>
  );
}
