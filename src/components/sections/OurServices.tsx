import * as React from "react";

import Button from "../Button";
import ArrowRightIcon from "../icons/ArrowRight";

import headphones from "./../../images/headphones.svg";
import settings from "./../../images/settings 1.svg";
import webDev from "./../../images/web-development.svg";

const OurServices = () => {
  const data = {
    tagText: "Our Services",
    heading:
      "We build software solutions that solve client's business challenges",
    buttonText: "Start a Project",
    features: [
      {
        img: headphones,
        imgAlt: "Headphones illustration",
        heading: "Technical support",
        paragraph:
          "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
        linkText: "Read more",
        url: "/support",
      },
      {
        img: settings,
        imgAlt: "Settings cog illustration",
        heading: "Testing Management",
        paragraph:
          "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
        linkText: "Read more",
        url: "/testing",
      },
      {
        img: webDev,
        imgAlt: "Web development illustration",
        heading: "Development",
        paragraph:
          "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
        linkText: "Read more",
        url: "/webdev",
      },
    ],
  };

  return (
    <section className="bg-sandyAlt py-[96px]">
      <div className="wrapper">
        <h2 className="caption">{data.tagText}</h2>
        <h3 className="heading-3 md:heading-2 mt-3 max-w-[777px]">
          {data.heading}
        </h3>
        <Button className="flex gap-4 mt-10 items-center">
          {data.buttonText}
          <ArrowRightIcon className="stroke-white" />
        </Button>
        <ul className="mt-20 flex flex-col lg:flex-row gap-8 md:w-[85%] md:mx-auto lg:w-auto">
          {data.features.map((item) => (
            <li key={item.heading}>
              <div className="flex flex-col bg-white p-8 pb-7 sm:p-12 sm:pb-11 transition hover:shadow-card group">
                <div className="w-[47px] h-[47px] bg-sandyAlt flex items-center justify-center rounded-full shrink-0">
                  <img src={item.img} alt={item.imgAlt} />
                </div>
                <div className="flex flex-col mt-4">
                  <p className="heading-6 text-black">{item.heading}</p>
                  <p className="paragraph text-grey mt-2">{item.paragraph}</p>
                  <a
                    href={item.url}
                    className="text-blue flex gap-3 items-center mt-6"
                  >
                    {item.linkText}
                    <ArrowRightIcon className="transition group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
