import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menLinks, womenLinks } from "./constants";
import { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export function HeaderMobileMenu() {
  return (
    <HeaderMobileMenuLayout>
      <HeaderMobileMenuNav>
        <HeaderMobileMenuItem name="Home" href="#" />
        <HeaderMobileDropItem name="Men" links={menLinks} />
        <HeaderMobileDropItem name="Women" links={womenLinks} />
        <HeaderMobileMenuItem name="Shop" href="#" />
        <HeaderMobileMenuItem name="Product" href="#" />
        <HeaderMobileMenuItem name="404 page" href="#" />
        <HeaderMobileMenuItem name="Checkout" href="#" />
      </HeaderMobileMenuNav>
      <MenuButtonsLayout>
        <MenuButton name="Register" href="#" />
        <MenuButton name="Login" href="#" />
        <MenuButton name="Cart - 5 items" href="#" />
      </MenuButtonsLayout>
      <MobileSearcField />
    </HeaderMobileMenuLayout>
  );
}
function HeaderMobileMenuLayout({ children }) {
  return (
    <nav
      id="mobile-menu-placeholder"
      className="mobile-menu flex flex-col items-center space-y-8 lg:hidden"
    >
      {children}
    </nav>
  );
}
function HeaderMobileMenuNav({ children }) {
  return <ul className="w-full">{children}</ul>;
}
function MenuButtonsLayout({ children }) {
  return (
    <div className="flex flex-col mt-6 space-y-2 items-center">{children}</div>
  );
}
function MenuButton({ name, href }) {
  return (
    <Link
      href={href}
      className="bg-primary hover:bg-transparent text-white hover:text-primary border border-primary font-semibold px-4 py-2 rounded-full flex items-center justify-center min-w-[110px]"
    >
      {name}
    </Link>
  );
}

export function HeaderMobileDropItem({ name, links }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  //const menuIsOpen = true;
  const returnedList = (open) => {
    if (open) {
      return (
        <>
          <ul className="mobile-dropdown-menu space-y-2">
            {links.map((link, index) => (
              <HeaderMobileMenuItem
                key={index}
                href={link?.href}
                name={link?.name}
              />
            ))}
          </ul>
        </>
      );
    }
  };
  return (
    <li className="relative group" onClick={() => setMenuIsOpen((s) => !s)}>
      <Link
        href="#"
        className="hover:text-secondary font-bold py-2 flex justify-center items-center cursor-pointer"
      >
        <span>{name}</span>
        <span>
          {menuIsOpen ? (
            <FontAwesomeIcon className="ml-1 text-xs" icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon className="ml-1 text-xs" icon={faChevronDown} />
          )}
        </span>
      </Link>
      {returnedList(menuIsOpen)}
    </li>
  );
}
function HeaderMobileMenuItem({ name, href }) {
  return (
    <li>
      <Link href={href} className="hover:text-secondary font-bold block py-2">
        {name}
      </Link>
    </li>
  );
}

function MobileSearcField() {
  return (
    <div className="  top-full right-0 mt-2 w-full bg-white shadow-lg p-2 rounded">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Search for products..."
      />
    </div>
  );
}
