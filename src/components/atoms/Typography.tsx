type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Typography({
  children,
  className = "",
}: TypographyProps) {
  return (
    <p className={`leading-relaxed text-gray-700 ${className}`}>
      {children}
    </p>
  );
}