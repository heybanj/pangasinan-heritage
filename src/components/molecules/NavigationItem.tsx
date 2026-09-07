import Link from "next/link";

type NavigationItemProps = {
  label: string;
  href: string;
};

export default function NavigationItem({
  label,
  href,
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      className="font-medium text-gray-700 transition hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
    >
      {label}
    </Link>
  );
}