import clsx from "clsx";
import Link from "next/link";

/**
 *
 * @param {{
 * children: any,
 * className: string,
 * linkHref: string,
 * variant:'transparent'|'borderRed' | 'borderWhite',
 * }} props
 */

export function UiButton({ className, children, variant, linkHref }) {
  const buttonClassname = clsx(
    "bg-primary border hover:bg-transparent text-white hover:text-primary font-semibold rounded-full",
    className,
    {
      transparent: "border-transparent  hover:border-primary inline-block",
      borderWhite: "border-primary hover:border-white hover:text-white",
      borderRed: "border-primary",
    }[variant],
  );
  return (
    <>
      {linkHref ? (
        <Link href={linkHref} className={buttonClassname}>
          {children}
        </Link>
      ) : (
        <button className={buttonClassname}>{children}</button>
      )}
    </>
  );
}
