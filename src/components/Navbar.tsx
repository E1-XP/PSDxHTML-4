import * as React from "react";
import Hamburger from "./Hamburger";

import ArrowRightIcon from "./icons/ArrowRight";
import logo from "./../images/Logo.svg";

const Navbar = () => {
  const menuItems = [
    { linkText: "Home", route: "/" },
    { linkText: "Service", route: "/service" },
    { linkText: "Company", route: "/company" },
    { linkText: "Career", route: "/career" },
    { linkText: "Blog", route: "/blog" },
    { linkText: "Contact us", route: "/contact" },
    { linkText: "Clone project", route: "/clone" },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="border-b border-white border-opacity-5 text-white w-full">
      <div className="flex items-center justify-between wrapper h-20">
        <a href="/">
          <h1>
            <img src={logo} alt="Finsweet" className="pointer-events-none" />
          </h1>
        </a>
        <div
          className={`items-center fixed lg:static flex max-lg:w-full transition gap-10 lg:gap-0 bg-darkBlue flex-col lg:flex-row top-20 left-0 h-full lg:h-auto pt-[15vh] lg:pt-0 lg:justify-normal z-40 ${
            isMenuOpen
              ? "opacity-100"
              : "opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-100"
          }`}
        >
          <ul className="flex flex-col lg:flex-row gap-8">
            {menuItems.map((item, i) => (
              <li
                key={item.linkText}
                className="text-link text-white opacity-60 last-of-type:opacity-100 last-of-type:text-sandy group transition hover:opacity-100"
              >
                <a
                  href={item.route}
                  className="flex items-center justify-center gap-2"
                >
                  {item.linkText}
                  {i === menuItems.length - 1 && (
                    <ArrowRightIcon className="stroke-white transition group-hover:translate-x-1" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Hamburger
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          className="flex lg:hidden z-50"
        />
      </div>
    </nav>
  );
};

export default Navbar;
