import * as React from "react";
import DecorationLine from "../DecorationLine";

import FacebookIcon from "../icons/Facebook";
import TwitterIcon from "../icons/Twitter";
import InstagramIcon from "../icons/Instagram";
import LinkedInIcon from "../icons/LinkedIn";
import ArrowRightIcon from "../icons/ArrowRight";

import Logo from "./../../images/Logo black.svg";
import Shape from "./../../images/Shapes.svg";

const Footer = () => {
  const data = {
    heading: "Let's make something special",
    paragraph: "Let's talk! 🤙 ",
    phone: "020 7993 2905",
    email: "hi@finsweet.com",
    address: "DLF Cybercity, Bhubaneswar, India, &52050",
    columns: [
      {
        items: [
          { text: "Home", url: "/home" },
          { text: "Service", url: "/service" },
          { text: "Company", url: "/company" },
          { text: "Career", url: "/career" },
          { text: "News", url: "/news" },
        ],
      },
      {
        heading: "Service",
        items: [
          { text: "Technical support", url: "/" },
          { text: "Testing", url: "/" },
          { text: "Development", url: "/" },
          { text: "AWS/Azure", url: "/" },
          { text: "Consulting", url: "/" },
          { text: "Information Technology", url: "/" },
        ],
      },
      {
        heading: "Resources",
        items: [
          { text: "About Us", url: "/" },
          { text: "Testimonial", url: "/" },
          { text: "Privacy Policy", url: "/" },
          { text: "Terms of use", url: "/" },
          { text: "Blog", url: "/" },
        ],
      },
    ],
    bottomLink: "Contact Us",
    footer: {
      copyright: "©2021 Finsweet",
      social: [
        { icon: FacebookIcon, url: "facebook.com", name: "Facebook" },
        { icon: TwitterIcon, url: "twitter.com", name: "Twitter" },
        { icon: InstagramIcon, url: "instagram.com", name: "Instagram" },
        { icon: LinkedInIcon, name: "LinkedIn", url: "linkedin.com" },
      ],
    },
  };

  return (
    <footer className="flex flex-col gap-16">
      <div className="bg-white wrapper flex flex-wrap flex-col md:flex-row justify-between relative w-full">
        <div>
          <img
            src={Shape}
            alt="Decoration shapes"
            className="pointer-events-none h-[34px] w-[37px]"
          />
          <p className="heading-2 max-w-[453px] mt-8">{data.heading}</p>
          <p className="heading-4 mt-10">{data.paragraph}</p>
          <a
            href={`tel:${data.phone}`}
            className="paragraph-large text-darkBlue block mt-7"
          >
            {data.phone}
          </a>
          <a
            href={`mailto:${data.email}`}
            className="paragraph-large text-darkBlue block mt-1"
          >
            {data.email}
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-[60px] mt-20 max-md:order-1">
          {data.columns.map((column, colIdx) => (
            <div>
              {column.heading && (
                <p className="heading-6 mb-3">{column.heading}</p>
              )}
              <ul className="flex flex-col gap-3">
                {column.items.map((item) => (
                  <li key={item.text}>
                    <a
                      href={item.url}
                      className={`${
                        colIdx === 0 ? "heading-6" : "paragraph-small"
                      } text-darkBlue block`}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="basis-full flex justify-between">
          <p className="paragraph-small">{data.address}</p>
          <a href="/contact" className="text-link flex items-center gap-2">
            <DecorationLine direction="horizontal" className="h-3.5 w-[50px]" />
            {data.bottomLink}
            <ArrowRightIcon />
          </a>
        </div>
      </div>
      <div className="bg-sandy">
        <div className="flex flex-col md:flex-row items-center justify-between wrapper py-7">
          <div className="flex items-center gap-[42px]">
            <a href="/">
              <img src={Logo} alt="Finsweet" />
            </a>
            <p className="">{data.footer.copyright}</p>
          </div>
          <ul className="flex gap-[26.67px]">
            {data.footer.social.map((item) => (
              <li key={item.name}>
                <a href={item.url}>
                  <item.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
