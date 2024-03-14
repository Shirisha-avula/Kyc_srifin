import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Heading, Img } from "../../components";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function KycPage() {
  const navigate= useNavigate ();
  const handleten = () =>{
    navigate("/desktopten");
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
        <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto md:p-5 max-w-[1221px]">
          <div className="flex flex-col w-[36%] md:w-full p-[15px] rounded-tr-[30px] rounded-br-[30px] bg-gray-100 shadow-lg">
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
            <div className="flex flex-col items-start w-[69%] md:w-full mt-7 mb-16 ml-[33px] py-1">
              <div className="flex items-center w-[88%] md:w-full gap-[5px]">
                <div className="h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 relative rounded-[50%]">
                  <div className="flex flex-col items-start justify-center w-full h-full left-0 bottom-0 right-0 top-0 p-2.5 m-auto border-black-900 border border-solid bg-black-900 absolute rounded-[50%]">
                    <Heading as="h2" className="ml-[7px] !text-white-A700">
                      1
                    </Heading>
                  </div>
                  <div className="flex flex-col w-[18%] left-[24%] top-[12%] m-auto absolute">
                    <Text size="s" as="p" className="!text-gray-600 !font-inter !font-normal">
                      1
                    </Text>
                  </div>
                </div>
                <Button
                  size="md"
                  variant="gradient"
                  shape="round"
                  color="light_blue_300_indigo_800"
                  className="tracking-[0.15px] font-semibold !bg-gradient2 min-w-[178px]"
                >
                  Aadhaar Front
                </Button>
              </div>
              <div className="h-[70px] w-[5px] ml-[22px] z-[1] bg-gray-900_19 rounded-[1px]" />
              <div className="flex items-center mt-[-1px] gap-[17px]">
                <Heading
                  as="h3"
                  className="flex justify-center items-center h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 text-center rounded-[50%]"
                >
                  2
                </Heading>
                <Text as="p" className="tracking-[0.15px] text-center">
                  Aadhaar Back
                </Text>
              </div>
              <div className="h-[70px] w-[5px] ml-[22px] bg-gray-900_19 rounded-[1px]" />
              <div className="flex items-center mt-[-1px] gap-[18px]">
                <Heading
                  as="h4"
                  className="flex justify-center items-center h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 text-center rounded-[50%]"
                >
                  3
                </Heading>
                <Text as="p" className="tracking-[0.15px] text-center">
                  PAN Card
                </Text>
              </div>
              <div className="h-[70px] w-[5px] ml-[22px] bg-gray-900_19 rounded-[1px]" />
              <div className="flex items-center mt-[-1px] gap-[19px]">
                <Heading
                  as="h5"
                  className="flex justify-center items-center h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 text-center rounded-[50%]"
                >
                  4
                </Heading>
                <Text as="p" className="tracking-[0.15px] text-center">
                  Bank A/c Details
                </Text>
              </div>
              <div className="h-[66px] w-[5px] ml-[22px] bg-gray-900_19 rounded-[1px]" />
              <div className="flex items-center mt-[-2px] gap-[7px]">
                <Heading
                  as="h6"
                  className="flex justify-center items-center h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 text-center rounded-[50%]"
                >
                  5
                </Heading>
                <Text as="p" className="tracking-[0.15px] text-center">
                  Address Proof
                </Text>
              </div>
              <div className="h-[70px] w-[5px] ml-[22px] z-[2] bg-gray-900_19 rounded-[1px]" />
              <div className="flex items-center mt-[-1px] gap-3">
                <Heading
                  as="h4"
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
          <div className="flex flex-col items-start w-[48%] md:w-full mt-[134px] p-3.5 bg-white-A700 shadow-md rounded-[10px]">
            <div className="flex w-[39%] md:w-full mt-3.5 ml-2.5 pt-[7px]">
              <Text as="p" className="!text-gray-900_02">
                Adhaar Card (Front)
              </Text>
            </div>
            <Text size="s" as="p" className="w-[88%] md:w-full mt-2 ml-2.5 !text-gray-900_a5 !leading-[140%]">
              Please upload your Aadhar card below for completing your first step of KYC.
            </Text>
            <div className="flex flex-col justify-center w-[49%] md:w-full mt-[34px] pl-2.5 gap-[9px] py-2.5">
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
            <div className="flex flex-col items-start w-[63%] md:w-full mt-[35px] ml-[148px] gap-[15px] p-[22px] sm:p-5 border-black-900_1c border border-solid bg-white-A700 shadow-sm rounded-[20px]">
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
              onClick={handleten}
              className="self-center mt-[61px] sm:px-5 tracking-[-0.32px] font-semibold min-w-[250px] rounded-[19px]"
            >
              Submit
            </Button>
            <Text
              size="s"
              as="p"
              className="w-[78%] md:w-full mt-4 mb-[22px] ml-[103px] !text-gray-900_a5 text-center !leading-[21px]"
            >
              If you are facing any difficulties, please get in touch with us.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
