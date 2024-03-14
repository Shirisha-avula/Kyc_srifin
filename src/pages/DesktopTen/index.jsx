import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, CheckBox, Input, Heading, Img } from "../../components";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function DesktopTenPage() {
  const navigate= useNavigate ();
  const handlelven = () =>{
    navigate("/desktopeleven");
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
        <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1271px]">
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
            <div className="flex flex-col items-start w-[70%] md:w-full mt-[21px] mb-[51px] ml-7 py-1">
              <div className="flex items-center mt-[7px] gap-[15px]">
                <Img src="images/img_div.svg" alt="div_one" className="h-[50px] w-[50px]" />
                <Text as="p" className="tracking-[0.15px] text-center">
                  Aadhaar Front
                </Text>
              </div>
              <div className="h-[70px] w-[5px] mt-[7px] ml-7 bg-green-500 rounded-[1px]" />
              <div className="flex items-center mt-[-2px] ml-[5px] gap-[5px]">
                <Heading
                  as="h2"
                  className="flex justify-center items-center h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 text-center rounded-[50%]"
                >
                  2
                </Heading>
                <Button
                  size="md"
                  variant="gradient"
                  shape="round"
                  color="light_blue_300_indigo_800"
                  className="tracking-[0.15px] font-semibold !bg-gradient2 min-w-[178px]"
                >
                  Aadhaar Back
                </Button>
              </div>
              <div className="h-[70px] w-[5px] ml-7 bg-gray-900_19 rounded-[1px]" />
              <div className="flex items-center mt-[-2px] ml-[5px] gap-[18px]">
                <Heading
                  as="h3"
                  className="flex justify-center items-center h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 text-center rounded-[50%]"
                >
                  3
                </Heading>
                <Text as="p" className="tracking-[0.15px] text-center">
                  PAN Card
                </Text>
              </div>
              <div className="h-[70px] w-[5px] ml-7 bg-gray-900_19 rounded-[1px]" />
              <div className="flex self-center justify-center items-center gap-[19px]">
                <Heading
                  as="h4"
                  className="flex justify-center items-center h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 text-center rounded-[50%]"
                >
                  4
                </Heading>
                <Text as="p" className="tracking-[0.15px] text-center">
                  Bank A/c Details
                </Text>
              </div>
              <div className="h-[70px] w-[5px] ml-7 bg-gray-900_19 rounded-[1px]" />
              <div className="flex items-center mt-[-1px] ml-[5px] gap-[7px]">
                <Heading
                  as="h5"
                  className="flex justify-center items-center h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 text-center rounded-[50%]"
                >
                  5
                </Heading>
                <Text as="p" className="tracking-[0.15px] text-center">
                  Address Proof
                </Text>
              </div>
              <div className="h-[70px] w-[5px] ml-7 z-[1] bg-gray-900_19 rounded-[1px]" />
              <div className="flex items-center ml-[5px] gap-3">
                <Heading
                  as="h6"
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
          <div className="flex flex-col items-center w-[50%] md:w-full p-7 sm:p-5 bg-white-A700 shadow-md rounded-[10px]">
            <div className="flex w-[36%] md:w-full pt-[7px]">
              <Text as="p" className="!text-gray-900_02">
                Adhaar Card (Back)
              </Text>
            </div>
            <Text size="s" as="p" className="w-[83%] md:w-full mt-2.5 !text-gray-900_a5 !leading-[140%]">
              Please upload your Aadhar card below for completing your Second step of KYC.
            </Text>
            <div className="flex flex-col justify-center w-[47%] md:w-full mt-[33px] pl-2.5 gap-[9px] py-2.5">
              <div className="flex w-[57%] md:w-full mt-[5px]">
                <div className="flex w-full">
                  <Text size="s" as="p" className="!text-gray-900_a5">
                    Adhaar Card Number
                  </Text>
                </div>
              </div>
              <Input
                color="black_900_7f"
                size="sm"
                shape="round"
                type="number"
                name="cardNumber"
                placeholder="Enter your Adhaar Number"
                className="sm:pr-5"
              />
            </div>
            <div className="flex flex-col items-start w-[45%] md:w-full mt-[34px] gap-[15px] p-[22px] sm:p-5 border-black-900_1c border border-solid bg-white-A700 shadow-sm rounded-[20px]">
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
            <CheckBox
              shape="square"
              name="input"
              label="I hereby agree that the above document belongs to me and voluntarily give my consent to SRIFIN software to utilize it as my address proof for KYC on purpose only."
              id="input"
              className="mt-[47px] gap-2.5 text-gray-900_03 text-left font-medium leading-[21px]"
            />
            <Button
              size="sm"
              variant="gradient"
              color="light_blue_300_indigo_800"
              onClick={handlelven}
              className="mt-[47px] sm:px-5 tracking-[-0.32px] font-semibold min-w-[250px] rounded-[19px]"
            >
              Submit
            </Button>
            <Text
              size="s"
              as="p"
              className="w-[61%] md:w-full mt-4 mb-[35px] !text-gray-900_a5 text-center !leading-[21px]"
            >
              If you are facing any difficulties, please get in touch with us.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
