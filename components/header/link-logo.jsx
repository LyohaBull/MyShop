import Link from "next/link";

export function LinkLogo({ children }) {
  return (
    <Link href="#" className="flex items-center">
      <div>{children}</div>
    </Link>
  );
}
