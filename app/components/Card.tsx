interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hover" | "interactive";
  padding?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  variant = "default",
  padding = "md",
  onClick,
  ...props
}: CardProps) {
  const variantClasses = {
    default: "card",
    hover: "card card-hover",
    interactive: "card card-interactive",
  };

  const paddingClasses = {
    none: "p-0",
    sm: "p-4 md:p-5",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10 lg:p-12",
  };

  return (
    <div
      className={`${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}
