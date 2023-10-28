import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-full border-t-2 border-gray-300 px-5 py-8">
        <section className="flex flex-row flex-wrap items-start justify-between gap-5 w-full md:w-[80%] m-auto">
          {/* first column */}
          <div className="flex flex-col items-start justify-between gap-2">
            <h4 className="text-2xl font-bold">CoAlign</h4>
            <p className="text-sm">2021 &copy; Lando</p>
            <p className="text-sm">All rights reserved.</p>
          </div>

          {/* second column */}
          <div className="flex flex-col items-start justify-between gap-2">
            <Link href="/" className="font-semibold">
              Home
            </Link>
            <Link href="/pricing" className="font-semibold text-[#262626]">
              Pricing
            </Link>
            <Link href="/about" className="font-semibold text-[#262626]">
              About Us
            </Link>
            <Link href="/contact" className="font-semibold text-[#262626]">
              Contact
            </Link>
          </div>

          {/* third column */}
          <div className="flex flex-col items-start justify-between gap-2">
            <Link href="/" className="font-semibold">
              Facebook
            </Link>
            <Link href="/pricing" className="font-semibold text-[#262626]">
              Instagram
            </Link>
            <Link href="/about" className="font-semibold text-[#262626]">
              Twitter
            </Link>
            <Link href="/contact" className="font-semibold text-[#262626]">
              Linkedin
            </Link>
          </div>

          {/* fourth column */}
          <div className="flex flex-col items-start justify-between gap-2">
            <Link href="/" className="font-semibold text-[#262626]">
              Privacy Policy
            </Link>
            <Link href="/pricing" className="font-semibold text-[#262626]">
              Terms of Service
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
