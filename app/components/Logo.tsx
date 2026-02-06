import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  showText?: boolean;
  onClick?: () => void;
}

// logo-dark.png  →  dark background version (white text)  →  use when variant="light"
// logo-light.png →  light background version (navy text)  →  use when variant="dark"
const logoSrc = {
  dark: "/logo-light.png",
  light: "/logo-dark.png",
};

export default function Logo({
  className = "",
  variant = "dark",
  showText = true,
  onClick,
}: LogoProps) {
  const src = logoSrc[variant];

  if (showText) {
    // Full logo (mark + text)
    return (
      <Link
        href="/"
        className={`inline-flex items-center ${className}`}
        onClick={onClick}
      >
        <img
          src={src}
          alt="Vertex Tech Company"
          className="h-20 w-auto object-contain"
          draggable={false}
        />
      </Link>
    );
  }

  // Mark only — crop to the icon portion (top ~55% of the square image)
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      onClick={onClick}
    >
      <div
        style={{
          width: 40,
          height: 40,
          overflow: "hidden",
        }}
      >
        <img
          src={src}
          alt="Vertex Tech Company"
          draggable={false}
          style={{
            width: 72,
            height: 72,
            objectFit: "cover",
            objectPosition: "center top",
            marginLeft: -16,
          }}
        />
      </div>
    </Link>
  );
}
