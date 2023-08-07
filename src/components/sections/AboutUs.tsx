import * as React from "react";
import DecorationLine from "../DecorationLine";
import ArrowRightIcon from "../icons/ArrowRight";

import img from "./../../images/Image 1.png";
import img2 from "./../../images/Image 2.png";
import img3 from "./../../images/Image 3.png";

const AboutUs = () => {
  const data = {
    tagText: "About Us",
    heading:
      "The company leads entire webdesign process from concept to delivery.",
    subHeading: "The Era Of Technology.",
    subParagraph:
      "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. ",
    images: [
      {
        img: img,
        alt: "people in office sitting at the table discussing ideas",
      },
      {
        img: img2,
        alt: "people in office sitting at the table discussing ideas",
      },
      {
        img: img3,
        alt: "people in office sitting at the table discussing ideas",
      },
    ],
    statistics: [
      { value: "1560+", text: "Project Delivered" },
      { value: "100+", text: "Professional" },
      { value: "950+", text: "Happy Client" },
      { value: "10 yrs", text: "Experience" },
    ],
    bottomLink: { text: "Read about us", url: "/about" },
  };

  return (
    <section className="wrapper mt-[90px] md:mt-[120px] mb-[64px] md:mb-[98px] flex flex-wrap justify-between gap-y-12">
      <div className="lg:basis-1/2 flex flex-col gap-4">
        <h2 className="caption">{data.tagText}</h2>
        <h3 className="heading-3 md:heading-2">{data.heading}</h3>
      </div>
      <div className="lg:basis-[43%] flex flex-col gap-4">
        <p className="heading-3 max-md:text-[28px] md:mt-[43px]">
          {data.subHeading}
        </p>
        <p className="paragraph">{data.subParagraph}</p>
      </div>
      <div className="basis-full flex flex-col md:flex-row gap-[11px]">
        {data.images.map((item, i) => (
          <div className="flex flex-col md:flex-row">
            <img
              src={item.img}
              alt={item.alt}
              className={`pointer-events-none ${
                i === data.images.length - 1
                  ? "md:max-w-[calc(100%_-_18px)]"
                  : ""
              }`}
            />
            {i === data.images.length - 1 && (
              <>
                <DecorationLine
                  direction="vertical"
                  className="hidden md:flex w-[18px]"
                />
                <DecorationLine
                  direction="horizontal"
                  className="md:hidden w-full"
                />
              </>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full items-center">
        <ul className="flex max-md:flex-wrap max-md:w-full md:basis-3/4 lg:basis-1/2 justify-between max-sm:gap-y-4 md:max-w-[600px] lg:max-w-none lg:min-w-[600px]">
          {data.statistics.map((item, i) => (
            <li
              key={item.value}
              className="max-sm:basis-1/2 w-max flex max-sm:justify-center"
            >
              <div
                className={`flex flex-col ${
                  i === 0 ? "max-[340px]:ml-5 max-sm:ml-7" : ""
                }`}
              >
                <p className="heading-3">{item.value}</p>
                <DecorationLine
                  direction="horizontal"
                  variant={2}
                  className="h-1.5 w-[72px] mt-2"
                />
                <p className="paragraph mt-1">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <a
          href={data.bottomLink.url}
          className="text-link flex gap-4 text-blue items-center group max-md:mt-16"
        >
          {data.bottomLink.text}
          <ArrowRightIcon className="transition group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
