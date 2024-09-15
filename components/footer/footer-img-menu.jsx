import Link from "next/link";

export function FooterImgMenu({ title, menuArray }) {
  return (
    <div className="w-full sm:w-1/6 px-4 mb-8">
      <h3 className="text-lg font-semibold mb-4 text-center lg:text-left">
        {title}
      </h3>
      <ul>
        {menuArray.map((item, index) => {
          return <FooterMenuItem menuInfo={item} key={index} />;
        })}
      </ul>
    </div>
  );
}

function FooterMenuItem({ menuInfo }) {
  const { name, href, img } = menuInfo;
  return (
    <li className="flex items-center mb-2 justify-center lg:justify-start">
      {img}
      <Link href={href} className="hover:text-primary">
        {name}
      </Link>
    </li>
  );
}
