import * as React from "react";

import DecorationLine from "../DecorationLine";
import Input from "../Input";

import shape from "./../../images/shape.svg";

const Newsletter = () => {
  const data = {
    tagText: "Newsletter",
    heading: "Subscribe our News Letter to get Latest Updates.",
    inputPlaceholder: "Paresh@Pixeto.com",
  };

  return (
    <section className="wrapper my-24 flex flex-col lg:flex-row">
      <div className="p-8 !pt-24 sm:p-16 md:p-24 flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-between w-full bg-blueAlt relative">
        <img
          src={shape}
          alt="Decoration shapes"
          className="pointer-events-none w-[88px] h-20 absolute top-0 left-0"
        />
        <div className="max-w-[488px] mr-12">
          <h2 className="caption text-white">{data.tagText}</h2>
          <h3 className="heading-3 !text-white mt-[13px]">{data.heading}</h3>
        </div>
        <Input placeholder={data.inputPlaceholder} className="w-[454px]" />
      </div>
      <DecorationLine
        direction="vertical"
        className="hidden md:flex h-auto ml-auto w-6"
      />
      <DecorationLine direction="horizontal" className="lg:hidden h-6" />
    </section>
  );
};

export default Newsletter;
