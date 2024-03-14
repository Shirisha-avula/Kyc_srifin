import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Img, Heading } from "../../components";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function DesktopFourteenPage() {
  const navigate= useNavigate ();
  const handlefifteen = () =>{
    navigate("/desktopfifteen");
  }
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
              <div className="h-[70px] w-[5px] mt-[-2px] ml-[27px] bg-gray-900_19 rounded-[1px]" />
              <div className="flex items-center ml-[3px] gap-3">
                <Heading
                  as="h2"
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
          <div className="flex flex-col items-start w-[50%] md:w-full p-7 sm:p-5 bg-white-A700 shadow-sm rounded-[10px]">
            <div className="flex w-[37%] md:w-full ml-1.5 pt-[7px]">
              <Text as="p" className="!text-gray-900">
                Profile picture
              </Text>
            </div>
            <Text size="s" as="p" className="w-[84%] md:w-full mt-2.5 ml-1.5 !text-gray-900_a5 !leading-[140%]">
              Please upload your Profile picture below for completing your sixth step of KYC.
            </Text>
            <div className="flex flex-col w-[46%] md:w-full mt-[25px] ml-1.5 gap-1.5 py-3">
              <div className="flex w-[35%] md:w-full mt-1.5 ml-2.5">
                <div className="flex w-full">
                  <Text size="s" as="p" className="!text-gray-900_a5">
                    Date of Birth
                  </Text>
                </div>
              </div>
              <Input
                color="black_900_7f"
                size="sm"
                shape="round"
                name="dateOfBirth"
                placeholder="Select Your Address proof"
                suffix={<Img src="images/img_calender.png" alt="Calender" className="w-[20px] h-[20px]" />}
                className="gap-[35px] font-medium"
              />
            </div>
            <div className="flex flex-col items-start w-[62%] md:w-full mt-[75px] ml-40 gap-[15px] p-[22px] sm:p-5 border-black-900_1c border border-solid bg-white-A700 shadow-lg rounded-[20px]">
              <Text size="xs" as="p" className="mt-[7px] ml-2.5 !text-gray-600_01">
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
              color="light_blue_300_indigo_800"
              onClick={handlefifteen}
              className="self-center mt-[66px] sm:px-5 tracking-[-0.32px] font-semibold min-w-[250px] rounded-[19px]"
            >
              Submit
            </Button>
            <Text size="s" as="p" className="w-[75%] md:w-full mt-4 mb-[47px] ml-[111px] !text-gray-900_a5 text-center">
              If you are facing any difficulties, please get in touch with us.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
