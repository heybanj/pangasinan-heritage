type IconProps = {
  name: "search" | "menu" | "location";
  size?: number;
};

export default function Icon({
  name,
  size = 24,
}: IconProps) {
  const icons = {
    search: "🔍",
    menu: "☰",
    location: "📍",
  };

  return (
    <span
      role="img"
      aria-label={name}
      style={{ fontSize: size }}
    >
      {icons[name]}
    </span>
  );
}