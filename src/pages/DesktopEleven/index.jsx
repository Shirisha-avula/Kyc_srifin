import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Heading, Img } from "../../components";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function DesktopElevenPage() {
  const navigate= useNavigate ();
  const handletwelve = () =>{
    navigate("/desktoptwelve");
  }
  return (
    <>
      <Helmet>
        <title>KYC form 2.0</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div>
          <Header className="p-3.5 bg-gradient3 shadow-xs" />
        </div>
        <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto md:p-5 max-w-[1271px]">
          <div className="flex flex-col w-[35%] md:w-full p-[15px] rounded-tr-[30px] rounded-br-[30px] bg-gray-100 shadow-lg">
            <Img src="images/img_group_1000001997.svg" alt="image" className="h-px mt-[18px] ml-[22px]" />
            <div className="mt-[54px] ml-1.5">
              <div className="flex flex-col gap-[21px]">
                <div className="flex justify-between items-center w-[86%] md:w-full ml-[19px] gap-5">
                  <Img src="images/img_group.png" alt="image_one" className="w-[80px] object-cover" />
                  <Heading size="s" as="h1" className="!text-black-900_cc tracking-[0.20px] text-center">
                    KYC Details
                  </Heading>
                </div>
                <div className="h-[4px] bg-blue_gray-100" />
              </div>
            </div>
            <div className="flex flex-col items-start w-[70%] md:w-full ml-[27px] pb-[13px] my-7">
              <div className="flex items-center gap-[15px] py-1">
                <Img src="images/img_div.svg" alt="div_one" className="h-[50px] w-[50px]" />
                <Text as="p" className="tracking-[0.15px] text-center">
                  Aadhaar Front
                </Text>
              </div>
              <div className="h-[70px] w-[5px] mt-1 ml-7 bg-green-500 rounded-[1px]" />
              <div className="flex items-center gap-[15px] py-1">
                <Img src="images/img_div.svg" alt="div_one" className="h-[50px] w-[50px]" />
                <Text as="p" className="tracking-[0.15px] text-center">
                  Aadhaar Back
                </Text>
              </div>
              <div className="h-[70px] w-[5px] mt-[-1px] ml-7 bg-green-500 rounded-[1px]" />
              <div className="flex items-center mt-[-2px] ml-1 gap-[5px]">
                <Heading
                  as="h2"
                  className="flex justify-center items-center h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 text-center rounded-[50%]"
                >
                  3
                </Heading>
                <Button
                  size="md"
                  variant="gradient"
                  shape="round"
                  color="light_blue_300_indigo_800"
                  className="sm:px-5 tracking-[0.15px] font-semibold !bg-gradient2 min-w-[178px]"
                >
                  PAN Card
                </Button>
              </div>
              <div className="h-[70px] w-[5px] ml-7 bg-gray-900_19 rounded-[1px]" />
              <div className="flex items-center ml-1.5 gap-[19px]">
                <Heading
                  as="h3"
                  className="flex justify-center items-center h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 text-center rounded-[50%]"
                >
                  4
                </Heading>
                <Text as="p" className="tracking-[0.15px] text-center">
                  Bank A/c Details
                </Text>
              </div>
              <div className="h-[70px] w-[5px] ml-7 bg-gray-900_19 rounded-[1px]" />
              <div className="flex items-center mt-[-2px] ml-1.5 gap-[11px]">
                <Heading
                  as="h4"
                  className="flex justify-center items-center h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 text-center rounded-[50%]"
                >
                  5
                </Heading>
                <Text as="p" className="tracking-[0.15px] text-center">
                  Address Proof
                </Text>
              </div>
              <div className="h-[70px] w-[5px] ml-7 bg-gray-900_19 rounded-[1px]" />
              <div className="flex items-center mt-[-1px] ml-1.5 gap-3">
                <Heading
                  as="h5"
                  className="flex justify-center items-center h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 text-center rounded-[50%]"
                >
                  6
                </Heading>
                <Text as="p" className="tracking-[0.15px] text-center">
                  Profile Picture
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-[50%] md:w-full mt-[134px] p-7 sm:p-5 bg-white-A700 shadow-md rounded-[10px]">
            <div className="flex w-[37%] md:w-full ml-1.5 py-px">
              <Text as="p" className="self-end mt-1 !text-gray-900_02">
                PAN Card{" "}
              </Text>
            </div>
            <Text size="s" as="p" className="w-[84%] md:w-full mt-2.5 ml-1.5 !text-gray-900_a5 !leading-[140%]">
              Please upload your PAN card below for completing your Third step of KYC.
            </Text>
            <div className="flex flex-col justify-center w-[47%] md:w-full mt-[33px] pl-2.5 gap-[9px] py-2.5">
              <div className="flex w-[49%] md:w-full mt-[5px]">
                <div className="flex w-full">
                  <Text size="s" as="p" className="!text-gray-900_a5">
                    PAN Card Number
                  </Text>
                </div>
              </div>
              <Input
                color="black_900_7f"
                size="sm"
                shape="round"
                type="number"
                name="cardNumber"
                placeholder="Enter your PAN Number"
                className="sm:pr-5"
              />
            </div>
            <div className="flex flex-col items-start w-[62%] md:w-full mt-[34px] ml-40 gap-[15px] p-[22px] sm:p-5 border-black-900_1c border border-solid bg-white-A700 shadow-sm rounded-[20px]">
              <Text size="xs" as="p" className="mt-[7px] ml-2.5 !text-gray-600_02">
                Upload aadhaar card front photo{" "}
              </Text>
              <Button
                size="xs"
                variant="outline"
                shape="round"
                color="teal_300_indigo_800"
                className="self-center sm:pr-5 font-semibold min-w-[106px] !rounded-[13px]"
              >
                Upload +
              </Button>
            </div>
            <Button
              size="sm"
              variant="gradient"
              color="light_blue_300_indigo_800"
              onClick={handletwelve}
              className="self-center mt-[62px] sm:px-5 tracking-[-0.32px] font-semibold min-w-[250px] rounded-[19px]"
            >
              Submit
            </Button>
            <Text
              size="s"
              as="p"
              className="w-[76%] md:w-full mt-4 mb-5 ml-[116px] !text-gray-900_a5 text-center !leading-[21px]"
            >
              If you are facing any difficulties, please get in touch with us.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
