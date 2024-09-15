import Link from "next/link";

export function FooterMenu({ title, menuArray }) {
  return (
    <div className="w-full sm:w-1/6 px-4 mb-8 text-center lg:text-left">
      <h3 className="text-lg font-semibold mb-4 ">{title}</h3>
      <ul>
        {menuArray.map((item, index) => {
          return <FooterMenuItem menuInfo={item} key={index} />;
        })}
      </ul>
    </div>
  );
}

function FooterMenuItem({ menuInfo }) {
  const { name, href } = menuInfo;
  return (
    <li>
      <Link href={href} className="hover:text-primary">
        {name}
      </Link>
    </li>
  );
}
