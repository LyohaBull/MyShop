import Link from "next/link";
import { SearchIcon } from "./search-icon";
import { useState } from "react";
import clsx from "clsx";

export function SearchField() {
  const [searchIsVisible, setSearchIsVisible] = useState(false);
  return (
    <div
      onMouseEnter={() => setSearchIsVisible(true)}
      onMouseLeave={() => setSearchIsVisible(false)}
    >
      <Link
        id="search-icon"
        href="#"
        className="text-white hover:text-secondary group"
      >
        <SearchIcon
          className={clsx(searchIsVisible && "group-hover:scale-120")}
        />
      </Link>
      {searchIsVisible && (
        <>
          <div className="w-full h-full right-0 absolute"></div>
          <div
            id="search-field"
            className="absolute mt-5 right-0 w-full bg-white shadow-lg p-2 rounded"
          >
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Поиск товаров..."
            />
          </div>
        </>
      )}
    </div>
  );
}
