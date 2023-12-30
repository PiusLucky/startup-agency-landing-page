import React from "react";
import { Separator } from "../ui/separator";

function FooterSection() {
  return (
    <section className="flex flex-col gap-[1.9rem] w-full mt-[10.44rem]">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <img src="/images/footer_logo.png" alt="footer logo" />
        </div>
        <div className="text-lightBlue text-[1rem] font-serif">
          © 2020 Epixelab. All rights reserved.
        </div>
        <div className="flex gap-4">
          <p className="text-lightBlue text-[1rem]">Portfolio</p>
          <p className="text-lightBlue text-[1rem]">How it Works</p>
          <p className="text-lightBlue text-[1rem]">Pricing</p>
          <p className="text-lightBlue text-[1rem]">About</p>
          <p className="text-lightBlue text-[1rem]">Login</p>
        </div>
      </div>
      <Separator />
      <div className="pb-[2.56rem]">
        <p className="text-customGray">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design.
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
