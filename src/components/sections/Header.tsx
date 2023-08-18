import AliceCarousel from "react-alice-carousel";
const Carousel = AliceCarousel.default ? AliceCarousel.default : AliceCarousel;

import "react-alice-carousel/lib/alice-carousel.css";

import Navbar from "../Navbar";
import Button from "../Button";
import DecorationLine from "../DecorationLine";

import ArrowRightIcon from "../icons/ArrowRight";

import headerImg from "./../../images/image.webp";
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
        { img: logo, alt: "Company logo" },
        { img: logo2, alt: "Company logo" },
        { img: logo3, alt: "Company logo" },
        { img: logo4, alt: "Company logo" },
        { img: logo5, alt: "Company logo" },
      ],
    },
  };

  const companies = data.clientsSection.clients.map((item, i) => (
    <img
      src={item.img}
      alt={item.alt}
      className="pointer-events-none ml-auto"
    />
  ));

  return (
    <header className="bg-darkBlue min-h-screen flex flex-col">
      <Navbar />
      <div className="flex wrapper gap-8 md:gap-12 lg:gap-[93px] xl:pt-16 mt-auto flex-col md:flex-row">
        <div className="md:pt-[56px] flex flex-col gap-6 items-start basis-[48.8%]">
          <div className="bg-white opacity-[0.06] w-6 h-6"></div>
          <h2 className="lg:heading heading-3 text-white">{data.heading}</h2>
          <p className="paragraph text-white opacity-60 max-w-[528px]">
            {data.paragraph}
          </p>
          <Button className="flex items-center justify-center gap-4 mt-2">
            {data.buttonText}
            <ArrowRightIcon className="stroke-white" />
          </Button>
        </div>
        <div className="flex items-center max-md:-order-1 h-max self-center max-md:mt-4">
          <DecorationLine
            direction="vertical"
            className="h-[103px] max-h-[17vw] w-2 md:w-4 self-end"
          />
          <img
            src={headerImg}
            alt="Office workers discussing new ideas"
            className="pointer-events-none w-[calc(100%_-_20px)] md:w-[calc(100%_-_40px)]"
          />
          <DecorationLine
            direction="vertical"
            className="h-[322px] max-h-[66vw] w-3 md:w-6 self-start"
          />
        </div>
      </div>
      <div className="flex wrapper mt-auto gap-8 max-md:mt-8">
        <div className="flex flex-col justify-center">
          <p className="paragraph-small text-white opacity-60">
            {data.clientsSection.heading}
          </p>
          <p className="paragraph-large text-white whitespace-nowrap">
            {data.clientsSection.paragraph}
          </p>
        </div>
        <div className="w-[calc(min(100vw,1312px)_-_17px_-_170px_-_64px)]">
          <Carousel
            items={companies}
            disableDotsControls
            disableButtonsControls
            autoPlay
            autoPlayInterval={2500}
            infinite
            mouseTracking
            responsive={{
              0: {
                items: 1,
              },
              568: {
                items: 2,
              },
              768: {
                items: 3,
              },
              1024: {
                items: 4,
              },
              1280: {
                items: 5,
              },
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
