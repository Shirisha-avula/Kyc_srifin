import React from "react";
import { Heading, Button, Img } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="w-full mx-auto md:p-5 max-w-[1379px]">
        <div className="flex justify-between gap-5">
          <div className="flex justify-center items-center w-[10%]">
            <Img src="images/img_whatsapp_image.png" alt="whatsappimage" className="w-[43%] object-cover" />
            <Heading as="h4" className="self-end !text-black-900 !font-inter">
              SRIFIN
            </Heading>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Button size="lg" variant="fill" shape="circle" className="w-[50px]">
              <Img src="images/img_group_1.svg" />
            </Button>
            <Heading as="h4" className="!text-blue_gray-900_01 !font-inter">
              UserName
            </Heading>
          </div>
        </div>
      </div>
    </header>
  );
}
