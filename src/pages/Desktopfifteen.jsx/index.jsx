import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Img, Heading } from "../../components";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import imagekyc  from "../../assets/images/kyc completed.png.jpeg"
export default function DesktopFourteenPage() {
  
  return (
    <>
      <Helmet>
        <title>Shirisha's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full gap-0.5 bg-white-A700">
        <div>
          <Header className="p-3.5 bg-white-A700 shadow-xs" />
        </div>
        <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1271px]">
          <div className="flex flex-col w-[35%] md:w-full p-[15px] rounded-tr-[30px] rounded-br-[30px] bg-gray-100 shadow-md">
            <Img src="images/img_group_1000001997.svg" alt="image" className="h-px mt-[18px] ml-[22px]" />
            <div className="mt-[54px] ml-1.5">
              <div className="flex flex-col gap-[18px]">
                <div className="flex justify-between items-center w-[86%] md:w-full ml-[19px] gap-5">
                  <Img src="images/img_group.png" alt="image_one" className="w-[80px] object-cover" />
                  <Heading size="md" as="h1" className="!text-black-900_cc tracking-[0.20px] text-center">
                    KYC Details
                  </Heading>
                </div>
                <div className="h-[4px] bg-blue_gray-100" />
              </div>
            </div>
            <div className="flex flex-col items-start w-[79%] md:w-full mt-3 mb-8 ml-12 py-1">
              <div className="flex items-center gap-[15px] py-1">
                <Img src="images/img_div.svg" alt="div_one" className="h-[50px] w-[50px]" />
                <Text as="p" className="tracking-[0.15px] text-center">
                  Aadhaar Front
                </Text>
              </div>
              <div className="h-[70px] w-[5px] mt-1 ml-[27px] bg-green-500 rounded-[1px]" />
              <div className="flex items-center gap-[15px]">
                <Img src="images/img_div.svg" alt="div_three" className="h-[50px] w-[50px]" />
                <Text as="p" className="tracking-[0.15px] text-center">
                  Aadhaar Back
                </Text>
              </div>
              <div className="h-[70px] w-[5px] mt-[9px] ml-[27px] bg-green-500 rounded-[1px]" />
              <div className="flex items-center mt-[-3px] gap-[19px]">
                <Img src="images/img_div.svg" alt="div_five" className="h-[50px] w-[50px]" />
                <Text as="p" className="tracking-[0.15px] text-center">
                  PAN Card
                </Text>
              </div>
              <div className="h-[70px] w-[5px] mt-2.5 ml-[27px] bg-green-500 rounded-[1px]" />
              <div className="flex items-center gap-[19px]">
                <Img src="images/img_div.svg" alt="div_seven" className="h-[50px] w-[50px]" />
                <Text as="p" className="tracking-[0.15px] text-center">
                  Bank A/c Details
                </Text>
              </div>
              <div className="h-[70px] w-[5px] mt-2.5 ml-[27px] bg-green-500 rounded-[1px]" />
              <div className="flex justify-between items-center w-[82%] md:w-full gap-5 z-[1]">
                <Img src="images/img_div.svg" alt="div_nine" className="h-[50px] w-[50px]" />
                <Text as="p" className="tracking-[0.15px] text-center">
                  Address Proof
                </Text>
              </div>
              <div className="h-[70px] w-[5px] mt-[-2px] ml-[27px] bg-green-500 rounded-[1px]" />
              <div className="flex items-center ml-[3px] gap-3">
              <Img src="images/img_div.svg" alt="div_nine" className="h-[50px] w-[50px]" />
                <Text as="p" className="tracking-[0.15px] text-center">
                  Profile Picture
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[500px] h-[600px]  md:w-full p-7 sm:p-5 bg-white-A700 ">
          <div className="flex flex-col justify-cnter "><Img src={imagekyc} alt="div_nine" className="ml-16 items-center h-[300px] w-[300px]" />
          <p className="text-center font-bold"> KYC  Completed</p><p className="text-center mt-5">Thanks for submiting your document we will verify it and complete your kyc as soon as possible</p></div>
          <Button
            color="light_blue_300_indigo_800"
            
            className="justify-center mt-[66px] h-[95px] sm:px-5 tracking-[-0.32px]  min-w-[250px] rounded-full relative pl-8"
            >
            <svg
                className="ml-5 absolute left-0 top-1/2 transform -translate-y-1/2"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="11" fill="#FFFFFF" />
                <path
                d="M5.75 12H17.75M17.75 12L13.25 16.5M17.75 12L13.25 7.5"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            <p className="ml-10">Complete your Profile Details</p> 
            </Button>


          </div>
        </div>
      </div>
    </>
  );
}
