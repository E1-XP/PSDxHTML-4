import * as React from "react";
import AliceCarousel from "react-alice-carousel";

import logo from "./../../images/Logo 2.svg";
import quote from "./../../images/Quote.svg";
import customer from "./../../images/Image 1 (1).png";
import customer2 from "./../../images/Image 2 (1).png";
import customer3 from "./../../images/Image 3 (1).png";
import DecorationLine from "../DecorationLine";

const Reviews = () => {
  const data = {
    tagText: "Reviews",
    heading: "Our customers love what we do",
    subtitle: "Transform your idea into reality with finsweet",
    paragraph:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    customers: [
      { img: customer, altText: "Customer photo" },
      { img: customer2, altText: "Customer photo" },
      { img: customer3, altText: "Customer photo" },
    ],
    bottomText: "30+",
    bottomText2: "Customer Reviews",
    quotes: Array(3).fill({
      text: "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!",
      author: "Johnny Andro",
      occupation: "Director, Company",
      companyImg: logo,
      authorImg: customer3,
      company: "Logoipsum",
    }),
  };

  const Quotes = data.quotes.map((item) => (
    <div className="flex flex-col md:flex-row bg-white">
      <DecorationLine
        direction="vertical"
        className="hidden md:flex h-auto w-[16.5px]"
      />
      <DecorationLine
        direction="horizontal"
        className="md:hidden h-[16.5px] order-1"
      />
      <div className="flex flex-col pt-8 md:pt-12 pl-4 md:pl-10 p-7 md:p-[42px]">
        <p className="heading-4 opacity-[0.87] md:pr-[27px]">{item.text}</p>
        <div className="flex flex-col max-sm:gap-10 sm:flex-row justify-between mt-10 sm:mt-6 items-center">
          <div className="flex gap-4 items-center">
            <img
              src={item.authorImg}
              alt={item.author}
              className="pointer-events-none shrink-0 w-[38px] h-[38px]"
            />
            <div>
              <p className="heading-6 opacity-[0.87]">{item.author}</p>
              <p className="paragraph-small opacity-60">{item.occupation}</p>
            </div>
          </div>
          <img
            src={item.companyImg}
            alt={item.company}
            className="md:self-end pointer-events-nones"
          />
        </div>
      </div>
    </div>
  ));

  const renderDotsItem = ({ isActive }) => {
    return isActive ? (
      <div className="h-3 w-3 rounded-full bg-darkBlue cursor-pointer" />
    ) : (
      <div className="h-3 w-3 rounded-full bg-darkBlue opacity-20 cursor-pointer" />
    );
  };

  return (
    <section className="pt-[102px] pb-[96px] bg-whitePurple">
      <div className="wrapper flex justify-between flex-col lg:flex-row max-lg:gap-24">
        <div className="basis-[38.45%] max-w-[492px] flex flex-col gap-4">
          <div className="bg-blueAlt w-4 h-4" />
          <h2 className="sr-only">{data.tagText}</h2>
          <h3 className="heading-3 md:heading-2">{data.heading}</h3>
          <p className="paragraph-large">{data.subtitle}</p>
          <p className="paragraph">{data.paragraph}</p>
          <div className="flex gap-3 mt-2">
            {data.customers.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={item.altText}
                className="pointer-events-none"
              />
            ))}
          </div>
          <p className="label-small flex items-center -mt-[2px]">
            <span className="label-medium">{data.bottomText}</span>
            {data.bottomText2}
          </p>
        </div>
        <div
          className="lg:basis-1/2 max-w-[320px] sm:max-w-[540px] md:max-w-[768px] lg:max-w-[500px] xl:max-w-[624px] max-lg:self-center relative"
          id="quotes"
        >
          <AliceCarousel
            items={Quotes}
            autoWidth
            disableButtonsControls
            autoPlay
            autoPlayInterval={3500}
            infinite
            mouseTracking
            responsive={{
              0: {
                items: 1,
              },
            }}
            renderDotsItem={renderDotsItem}
          />
          <img
            src={quote}
            alt="Quote marks illustration"
            className="absolute pointer-events-none right-10 -top-[19px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
