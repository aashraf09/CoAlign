import React from "react";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

const FlexBox = (props) => {
  const {
    hint,
    heading,
    subheading,
    paragraph,
    button_1,
    button_2,
    image,
    placeImageFirst,
  } = props;
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-5 w-[90%] md:w-[80%] m-auto">
      <div
        className={`basis-1/2 flex flex-col items-start justify-between gap-2 ${
          placeImageFirst ? "order-last" : "order-first"
        }`}
      >
        {hint && (
          <p className="uppercase font-bold text-sm text-[#868686]">{hint}</p>
        )}
        {heading && (
          <h1 className="font-bold text-3xl  md:text-5xl capitalize">
            {heading}
          </h1>
        )}
        {subheading && (
          <h2 className="font-bold text-xl md:text-3xl capitalize">
            {subheading}
          </h2>
        )}
        {paragraph && <h4 className="text-sm md:text-lg">{paragraph}</h4>}
        <div className="flex flex-row flex-wrap items-start justify-evenly gap-5">
          {button_1 && (
            <Button
              as={Link}
              href={button_1.link_to}
              className="bg-[#3164f5] px-4 py-2 rounded-lg text-white font-bold"
            >
              {button_1.name}
            </Button>
          )}
          {button_2 && (
            <Button
              as={Link}
              href={button_2.link_to}
              className="bg-transparent px-4 py-2 rounded-lg border border-black text-[#262626] font-bold"
            >
              {button_2.name}
            </Button>
          )}
        </div>
      </div>
      <div
        className={`basis-1/2 flex items-center justify-center ${
          placeImageFirst ? "order-first" : "order-last"
        }`}
      >
        {image && (
          <Image
            src={image}
            className="h-[250px] w-[250px] md:h-[500px] md:w-[500px]"
          ></Image>
        )}
      </div>
    </section>
  );
};

export default FlexBox;
