import React from "react";
import FlexBox from "@/components/FlexBox";
import Footer from "@/components/Footer";
import TopNavbar from "@/components/TopNavbar";
import Vector_Entrepreneur_PNG_Photo from "@/assets/Vector-Entrepreneur-PNG-Photo.png";
import Vector_Entrepreneur_PNG_Image_HD from "@/assets/Vector-Entrepreneur-PNG-Image-HD.png";
import Vector_Entrepreneur_PNG_High_Quality_Image from "@/assets/Vector-Entrepreneur-PNG-High-Quality-Image.png";
import Benefits from "@/components/Benefits";
import JoinUs from "@/components/JoinUs";
import Testimonials from "@/components/Testimonials";

const index = () => {
  return (
    <>
      <TopNavbar />
      <main className="flex flex-col items-center justify-between gap-20">
        <secttion className="pt-12">
          <FlexBox
            hint={"- Free 30 days trial"}
            heading={"Find your perfect co-founder match"}
            paragraph={
              "Our platform saves your time & guesswork while trying to find ideal partners."
            }
            button_1={{ name: "Try for free", link_to: "/free-trial" }}
            button_2={{ name: "See how it works", link_to: "/how-it-works" }}
            image={Vector_Entrepreneur_PNG_Photo}
            placeImageFirst={false}
          />
        </secttion>
        <section className=" bg-white rounded-2xl py-10 w-[80%]">
          <FlexBox
            subheading={"We help you build teams"}
            paragraph={"Join our community and experience the benefits today!"}
            button_1={{ name: "Try for free", link_to: "/free-trial" }}
            image={Vector_Entrepreneur_PNG_High_Quality_Image}
            placeImageFirst={false}
          />
        </section>
        <FlexBox
          hint={"about us"}
          subheading={"Find your perfect co-founder!"}
          paragraph={
            "CoAlign helps enterpreneurs find ideal co-founder partners to launch their new ventures. We match you basen on aligned interests, compatible personalities, and shared visions"
          }
          button_2={{ name: "Try Now", link_to: "/free-trial" }}
          image={Vector_Entrepreneur_PNG_Image_HD}
          placeImageFirst={true}
        />
        <Benefits />
        <JoinUs />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default index;
