import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Navbar from "../Navbar";
import Button from "../Button";
import DecorationLine from "../DecorationLine";

import ArrowRightIcon from "../icons/ArrowRight";

import headerImg from "./../../images/Image.png";
import logo from "./../../images/Logo (0).svg";
import logo2 from "./../../images/Logo (1).svg";
import logo3 from "./../../images/Logo (2).svg";
import logo4 from "./../../images/Logo (3).svg";
import logo5 from "./../../images/Logo (4).svg";

const Header = () => {
  const data = {
    heading: "Transform Your Idea Into Reality with Finsweet",
    paragraph:
      "The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.",
    buttonText: "Request Quote",
    clientsSection: {
      heading: "Our Clients",
      paragraph: "We've Worked with",
      clients: [
        { img: logo, alt: "Logo" },
        { img: logo2, alt: "Logo2" },
        { img: logo3, alt: "Logo3" },
        { img: logo4, alt: "Logo4" },
        { img: logo5, alt: "Logo5" },
      ],
    },
  };

  return (
    <header className="bg-darkBlue min-h-screen flex flex-col">
      <Navbar />
      <div className="flex wrapper gap-8 md:gap-12 lg:gap-[93px] xl:pt-16 mt-auto flex-col md:flex-row">
        <div className="md:pt-[56px] flex flex-col gap-6 items-start basis-[48.8%]">
          <div className="bg-white opacity-[0.06] w-6 h-6"></div>
          <h2 className="heading max-lg:text-4xl">{data.heading}</h2>
          <p className="paragraph max-w-[528px]">{data.paragraph}</p>
          <Button className="flex items-center justify-center gap-4 mt-2">
            {data.buttonText}
            <ArrowRightIcon />
          </Button>
        </div>
        <div className="flex items-center max-md:-order-1 h-max self-center max-md:mt-4">
          <DecorationLine
            direction="vertical"
            className="h-[103px] w-4 self-end"
          />
          <img
            src={headerImg}
            alt="Office workers discussing new ideas"
            className="pointer-events-none w-[calc(100%_-_40px)]"
          />
          <DecorationLine
            direction="vertical"
            className="h-[322px] w-6 self-start"
          />
        </div>
      </div>
      <div className="flex wrapper mt-auto gap-8 max-md:mt-8">
        <div className="flex flex-col justify-center">
          <p className="paragraph-small">{data.clientsSection.heading}</p>
          <p className="paragraph-large whitespace-nowrap">
            {data.clientsSection.paragraph}
          </p>
        </div>
        <div>
          <Swiper
            id="header-swiper"
            slidesPerView={1}
            modules={[Autoplay]}
            // breakpoints={{
            //   640: {
            //     slidesPerView: 2,
            //     spaceBetween: 8,
            //   },
            //   768: {
            //     slidesPerView: "auto",
            //     spaceBetween: 16,
            //   },
            //   1400: {
            //     slidesPerView: 5,
            //     spaceBetween: 32,
            //   }
            //  }}
            loop={true}
            //  autoplay={{
            //    delay: 2500,
            //  }}
          >
            {data.clientsSection.clients.map((item, i) => (
              <SwiperSlide key={i}>
                <img
                  src={item.img}
                  alt={item.alt}
                  className="pointer-events-none"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </header>
  );
};

export default Header;
