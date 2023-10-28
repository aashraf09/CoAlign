import React from "react";
import Vector_Entrepreneur_PNG_Free_Download from "@/assets/Vector-Entrepreneur-PNG-Free-Download.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faArrowsDownToPeople,
  faCirclePlus,
  faEye,
  faFaceSmile,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

const Benefits = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-5 w-[80%] m-auto">
      <div className="basis-1/2 flex flex-col items-start justify-between gap-2">
        <p className="uppercase font-bold text-sm text-[#868686]">Benefits</p>
        <h2 className="font-bold text-3xl capitalize">Why Us?</h2>
        <ul className="flex flex-col items-start justify-between gap-3">
          <li className="flex flex-row items-start justify-between gap-3">
            <FontAwesomeIcon icon={faHeadphones} size="xl" />
            <p className="text-lg">
              Personality Powered - Our advanced matching goes beyond just
              skills and experience to identify truw founder compatibility. We
              analyze workstyles, motivations, and values alignment to predict
              partnership success.
            </p>
          </li>
          <li className="flex flex-row items-start justify-between gap-3">
            <FontAwesomeIcon size="xl" icon={faFaceSmile} />
            <p className="text-lg">
              Trusted Matching - Our two-way opt-in matching prevents unwanted
              outreach. Matches represent real promise and interest.
            </p>
          </li>
          <li className="flex flex-row items-start justify-between gap-3">
            <FontAwesomeIcon size="xl" icon={faHeadphones} />
            <p className="text-lg">
              Post-Match Support - We work to foster strong partnerships long
              after initial connections with ongoing resources.
            </p>
          </li>
          <li className="flex flex-row items-start justify-between gap-3">
            <FontAwesomeIcon size="xl" icon={faEye} />
            <p className="text-lg">
              Team formation Tools - We provide resources and frameworks to
              facilitate establishing shared vision, equitable equity splits,
              responsibilities and more.
            </p>
          </li>
          <li className="flex flex-row items-start justify-between gap-3">
            <FontAwesomeIcon size="xl" icon={faCirclePlus} />
            <p className="text-lg">
              Plus more! More information what our tools brings can be found in
              About us.
            </p>
          </li>
        </ul>
      </div>
      <div className="basis-1/2">
        <Image src={Vector_Entrepreneur_PNG_Free_Download}></Image>
      </div>
    </section>
  );
};

export default Benefits;
