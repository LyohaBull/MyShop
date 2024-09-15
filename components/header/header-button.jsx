import Link from "next/link";

export function HeaderButton({ href, name }) {
  return (
    <Link
      href={href}
      className="bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block"
    >
      {name}
    </Link>
  );
}
