import * as React from "react";
import DecorationLine from "../DecorationLine";

import shuttle from "./../../images/shuttle 1.svg";
import settings from "./../../images/settings 1.svg";
import support from "./../../images/support 1.svg";

const OurExpertise = () => {
  const data = {
    tagText: "Our Expertise",
    heading:
      "We want to get local identification in every corner of the world in this era of global citizenship",
    paragraph:
      "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. ",
    features: [
      {
        heading: "On Time Delivery",
        paragraph:
          "Through True Rich Attended does no end it his mother since real had half every him.",
        img: shuttle,
        imgAlt: "Space shuttle illustration",
      },
      {
        heading: "Best Quality",
        paragraph:
          "Through True Rich Attended does no end it his mother since real had half every him.",
        img: settings,
        imgAlt: "Settings cog illustration",
      },
      {
        heading: "Support Assist",
        paragraph:
          "Through True Rich Attended does no end it his mother since real had half every him.",
        img: support,
        imgAlt: "Customer support person illustration",
      },
    ],
  };

  return (
    <section className="bg-lightBlue py-[96px]">
      <div className="wrapper flex flex-col lg:flex-row justify-between max-lg:gap-16">
        <div className="basis-[48.6%]">
          <h2 className="caption">{data.tagText}</h2>
          <h3 className="heading-3 md:heading-2 mt-4">{data.heading}</h3>
          <p className="paragraph mt-6">{data.paragraph}</p>
        </div>
        <div className="flex flex-col basis-[40.25%] md:self-center md:w-4/6 lg:w-auto lg:self-auto">
          <div className="w-4 h-4 bg-blue" />
          <ul className="flex flex-col gap-3">
            {data.features.map((item, i) => (
              <li key={item.heading}>
                <div className="flex bg-white p-4 sm:p-8 gap-2 sm:gap-4">
                  <div className="bg-sandyAlt w-[47px] h-[47px] rounded-full flex items-center justify-center shrink-0">
                    <img src={item.img} alt={item.imgAlt} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="heading-6 text-black">{item.heading}</p>
                    <p className="paragraph-small text-grey max-w-[303px]">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
                {i === data.features.length - 1 && (
                  <DecorationLine direction="horizontal" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
