import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";

import { BellIcon, SearchIcon } from "@heroicons/react/solid";

const classes = {
  homeItem:
    "headerLink cursor-default font-semibold text-white hover:text-white",
  listItems: "headerLink",
  menuList: "hidden space-x-4 md:flex",
  logoContainer: "flex items-center space-x-2 md:space-x-10 ",
  logoImg: "cursor-pointer object-contain",
};

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
      <section className={classes.logoContainer}>
        <Image
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className={classes.logoImg}
        />

        <ul className={classes.menuList}>
          <li className={classes.homeItem}>Home</li>
          <li className={classes.listItems}>TV Shows</li>
          <li className={classes.listItems}>Movies</li>
          <li className={classes.listItems}>New & Popular</li>
          <li className={classes.listItems}>My List</li>
        </ul>
      </section>

      <section className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
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
      </section>
    </header>
  );
};

export default Header;
