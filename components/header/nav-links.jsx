import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export function NavLinks({ children }) {
  return (
    <nav className="hidden lg:flex md:flex-grow justify-center">
      <ul className="flex justify-center space-x-4 text-white">{children}</ul>
    </nav>
  );
}

export function DropMenuItem({ name, links }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const returnedList = (open) => {
    if (open) {
      return (
        <>
          <div className="absolute w-full h-1"></div>
          <ul className="absolute mt-1 left-0 bg-white text-black space-y-2 p-2 rounded shadow-lg">
            {links.map((link, index) => (
              <MenuLink key={index} href={link?.href} name={link?.name} />
            ))}
          </ul>
        </>
      );
    }
  };
  return (
    <li
      className="relative group"
      onMouseEnter={() => setMenuIsOpen(true)}
      onMouseLeave={() => setMenuIsOpen(false)}
    >
      <Link
        href="#"
        className="hover:text-secondary font-semibold flex items-center  hover:text-primary"
      >
        {name}
        {menuIsOpen ? (
          <FontAwesomeIcon className="ml-1 text-xs" icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon className="ml-1 text-xs" icon={faChevronDown} />
        )}
      </Link>
      {returnedList(menuIsOpen)}
    </li>
  );
}

export function MenuLink({ name, href }) {
  return (
    <li>
      <Link
        href={href}
        className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded"
      >
        {name}
      </Link>
    </li>
  );
}

export function LiItemMenu({ children }) {
  return (
    <li>
      <Link
        href="shop.html"
        className="hover:text-secondary font-semibold hover:text-primary"
      >
        {children}
      </Link>
    </li>
  );
}
