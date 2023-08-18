import * as React from "react";

import img from "./../../images/image (2).webp";
import img2 from "./../../images/image (1).webp";
import ArrowRightIcon from "../icons/ArrowRight";

const BlogSection = () => {
  const data = {
    tagText: "Blog",
    heading: "Read our latest blogs & news",
    articles: [
      {
        date: "Jan 19, 2021",
        heading: "Today’s best design trends for digital products",
        linkText: "Read More",
        img: img,
        imgAlt: "Happy office workers during work",
      },
      {
        date: "Jan 19, 2021",
        heading: "A practical guide to building a brand strategy",
        linkText: "Read More",
        img: img2,
        imgAlt: "Office workers during work",
      },
    ],
  };

  return (
    <section className="bg-whiteBlue py-[96px]">
      <div className="wrapper">
        <div className="bg-blueAlt w-4 h-4" />
        <h2 className="sr-only">{data.tagText}</h2>
        <h3 className="heading-3 md:heading-2 mt-[19px]">{data.heading}</h3>
        <ul className="grid grid-cols-1 lg:grid-cols-2 mt-[68px] gap-8">
          {data.articles.map((item) => (
            <li key={item.heading} className="basis-1/2">
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
                <img
                  src={item.img}
                  alt={item.imgAlt}
                  className="pointer-events-none"
                />
                <div className="bg-white flex flex-col p-4 sm:p-8 grow">
                  <p className="paragraph-small opacity-60">{item.date}</p>
                  <p className="heading-4 mt-2">{item.heading}</p>
                  <a
                    href="#"
                    className="text-link text-blue opacity-[0.87] mt-6 flex gap-3 items-center group"
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

export default BlogSection;
