import Link from "next/link";

export function FooterCopyrights({ title, description, links }) {
  return (
    <div className="w-full lg:w-3/4 text-center lg:text-left mb-4 lg:mb-0">
      <p className="mb-4 font-bold">&copy; {title}</p>
      <ul className="flex justify-center lg:justify-start space-x-4 mb-4 lg:mb-0 flex-col lg:flex-row gap-4">
        {links.map((link, index) => (
          <LinksItem key={index} {...link} />
        ))}
      </ul>
      <p className="text-sm mt-4 max-w-52 mx-auto lg:max-w-full lg:mx-0">
        {description}
      </p>
    </div>
  );
}
function LinksItem({ name, href }) {
  return (
    <li>
      <Link href={href} className="hover:text-primary">
        {name}
      </Link>
    </li>
  );
}
