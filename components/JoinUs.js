import React from "react";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import Entrepreneur_Idea from "@/assets/Entrepreneur-Idea.png";

const JoinUs = () => {
  return (
    <section className="relative flex flex-col gap-5 md:flex-row items-end justify-between bg-white px-10 md:py-20 py-10 w-[90%] md:w-[80%] m-auto">
      <div className="basis-1/2 flex flex-col items-start justify-between gap-5">
        <Image
          src={Entrepreneur_Idea}
          className="h-[150px] w-[200px] md:h-[350px] md:w-[400px] md:absolute top-[25%] left-[25%] md:translate-x-[-50%] md:translate-y-[-50%]"
        ></Image>
        <h2 className="font-bold text-3xl capitalize">
          How to join our community
        </h2>
        <p className="text-lg">
          just 3 simple steps to find your perfect co-founder!
        </p>
        <Button
          as={Link}
          href={"/singup"}
          className="bg-[#3164f5] px-4 py-2 rounded-lg text-white font-bold"
        >
          Sing up now
        </Button>
      </div>
      <div className="basis-1/2 flex flex-col items-start justify-between gap-5">
        <div className="flex flex-col items-start justify-between gap-3 border-b py-5 border-b-[#262626]">
          <h2 className="font-bold text-3xl capitalize">Step 1 -</h2>
          <p className="text-lg text-[#262626]">
            Sing up & choose of you are a startup founder or an individual
            looking to join a startup.
          </p>
        </div>
        <div className="flex flex-col items-start justify-between gap-3 border-b py-5 border-b-[#262626]">
          <h2 className="font-bold text-3xl capitalize">Step 2 -</h2>
          <p className="text-lg text-[#262626]">
            Complete your profil;e & preferences and you will start exploring
            your matches
          </p>
        </div>
        <div className="flex flex-col items-start justify-between gap-3 py-5">
          <h2 className="font-bold text-3xl capitalize">Step 3 -</h2>
          <p className="text-lg text-[#262626]">
            Proof. You are ready to9 start bowsing! Have fun!
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;

// #FO71D50D21F03 $80 wala... banday nay khud hi order place kr diya tha

// #FO1B86D23B43 $30 wala... banday nay respond hi nhi kiya tha so me ne khud order cancel kr diya
