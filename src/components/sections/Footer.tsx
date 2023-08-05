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
          { text: "Home", url: "/" },
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
    bottomLink: { text: "Contact Us", url: "/contact" },
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
      <div className="bg-white wrapper flex flex-wrap flex-col sm:flex-row justify-between relative w-full">
        <div className="flex flex-col max-md:items-center [&>img]:mr-auto max-lg:w-full">
          <img
            src={Shape}
            alt="Decoration shapes"
            className="pointer-events-none h-[34px] w-[37px]"
          />
          <p className="heading-2 max-lg:text-4xl max-w-[453px] mt-8">
            {data.heading}
          </p>
          <div className="max-lg:w-[268px] max-md:self-auto max-lg:self-end max-md:mt-0 max-lg:-mt-28 flex flex-col max-md:items-center">
            <p className="heading-4 mt-10">{data.paragraph}</p>
            <a
              href={`tel:${data.phone}`}
              className="paragraph-large text-darkBlue block mt-7 transition hover:opacity-60"
            >
              {data.phone}
            </a>
            <a
              href={`mailto:${data.email}`}
              className="paragraph-large text-darkBlue block mt-1 transition hover:opacity-60"
            >
              {data.email}
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-around max-lg:basis-full sm:flex-row gap-12 md:gap-[60px] mt-12 md:mt-20 max-lg:order-1 lg:mx-auto xl:pl-28">
          {data.columns.map((column, colIdx) => (
            <div>
              {column.heading && (
                <p className="heading-6 mb-3 max-sm:text-center">
                  {column.heading}
                </p>
              )}
              <ul className="flex flex-col gap-3 flex-wrap">
                {column.items.map((item) => (
                  <li
                    key={item.text}
                    className={`${
                      colIdx === 0 ? "max-sm:basis-1/2" : ""
                    } max-sm:text-center`}
                  >
                    <a
                      href={item.url}
                      className={`${
                        colIdx === 0 ? "heading-6" : "paragraph-small"
                      } text-darkBlue block transition hover:opacity-60`}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="basis-full flex flex-col md:flex-row-reverse lg:flex-row justify-between items-center md:items-end">
          <div>
            <div className="border border-b border-black border-opacity-[0.08] w-full md:w-[268px] mt-3.5" />
            <p className="paragraph-small mt-4 md:max-w-[206px]">
              {data.address}
            </p>
          </div>
          <a
            href={data.bottomLink.url}
            className="text-link flex items-center gap-2 group max-md:mt-12 max-md:w-auto"
          >
            <DecorationLine
              direction="horizontal"
              variant={1}
              className="h-3.5 w-[50px]"
            />
            {data.bottomLink.text}
            <ArrowRightIcon className="stroke-darkBlue transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div className="bg-sandyAlt">
        <div className="flex flex-col max-sm:gap-8 sm:flex-row items-center justify-between wrapper py-7">
          <div className="flex items-center gap-[42px]">
            <a href="/">
              <img src={Logo} alt="Finsweet" />
            </a>
            <p className="label-medium">{data.footer.copyright}</p>
          </div>
          <ul className="flex gap-[26.67px]">
            {data.footer.social.map((item) => (
              <li key={item.name}>
                <a href={item.url} className="transition hover:opacity-60">
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
