import React, { useEffect } from "react";

import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";

const classes = {};

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  useEffect(() => {
    const handelScroll = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  const headerBgColor = isScrolled ? "bg-transparent" : "bg-[#141414]";

  return (
    <header className={headerBgColor}>
      <div className="flex items-center space-x-2 md:space-x-10 ">
        <Image
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <Image
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
