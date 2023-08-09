import * as React from "react";
import DecorationLine from "../DecorationLine";

import shape from "./../../images/Shapes.svg";
import bulb from "./../../images/bulb.svg";
import notepad from "./../../images/notepad.svg";
import webdev from "./../../images/webdev.svg";
import idea from "./../../images/idea.svg";
import rocket from "./../../images/rocket.svg";
import maintenance from "./../../images/maintenance.svg";

const OurProcess = () => {
  const data = {
    tagText: "Our Process",
    heading: "The process we are working With Our client Worldwide",
    paragraph:
      "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.",
    features: [
      {
        heading: "Discover",
        paragraph:
          "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
        img: bulb,
        imgAlt: "Light bulb illustration",
      },
      {
        heading: "Designing",
        paragraph:
          "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
        img: notepad,
        imgAlt: "Notepad illustration",
      },
      {
        heading: "Development",
        paragraph:
          "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
        img: webdev,
        imgAlt: "Web development illustration",
      },
      {
        heading: "Testing",
        paragraph:
          "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
        img: idea,
        imgAlt: "Clever mind illustration",
      },
      {
        heading: "Deployment",
        paragraph:
          "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
        img: rocket,
        imgAlt: "Rocket illustration",
      },
      {
        heading: "Maintenance",
        paragraph:
          "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
        img: maintenance,
        imgAlt: "Website maintenance illustration",
      },
    ],
  };

  return (
    <section className="wrapper flex flex-col py-[96px] gap-[68px]">
      <div className="flex justify-between relative">
        <div className="max-w-[605px] md:max-w-[733px] flex flex-col gap-4">
          <h2 className="caption text-black">{data.tagText}</h2>
          <h3 className="heading-3 md:heading-2">{data.heading}</h3>
          <p className="paragraph text-darkBlue opacity-60 max-w-[642px]">
            {data.paragraph}
          </p>
        </div>
        <img
          src={shape}
          alt="decoration shapes"
          className="rotate-90 w-[29px] h-[27px] md:mt-[22px] pointer-events-none absolute right-0"
        />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 [&>*]:before:hidden md:[&>*]:before:block md:[&>*:nth-child(2n)]:before:hidden lg:[&>*:nth-child(2n)]:before:block lg:[&>*:nth-child(3n)]:before:hidden ">
        {data.features.map((item, i, arr) => (
          <li
            key={item.heading}
            className="flex flex-col last-of-type:-mt-2 relative last:after:hidden md:after:hidden before:absolute before:top-[calc(50%_-_1px)] before:-right-12 before:border-b-2 before:border-b-whiteGrey before:border-dashed after:border-l-2 after:border-l-whiteGrey after:border-dashed before:w-12 after:h-12 after:absolute after:left-[calc(50%_+_1px)] after:-bottom-[48px]"
          >
            <div className="flex gap-4 border border-opacity-[0.17] border-darkBlue p-5 sm:p-8 pb-4 sm:pb-7 pr-2.5 relative">
              <div className="flex items-center justify-center bg-sandy bg-opacity-[0.17] w-[47px] h-[47px] rounded-full shrink-0">
                <img
                  src={item.img}
                  alt={item.imgAlt}
                  className="pointer-events-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="heading-6">{item.heading}</p>
                <p className="paragraph">{item.paragraph}</p>
              </div>
              <span className="absolute top-3 right-4 text-darkBlue opacity-20 font-sans text-2xl leading-8 font-semibold">{`0${
                i + 1
              }`}</span>
            </div>
            {[0, arr.length - 1].includes(i) && (
              <DecorationLine
                direction="horizontal"
                className={arr.length - 1 === i ? "-order-1" : ""}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurProcess;
