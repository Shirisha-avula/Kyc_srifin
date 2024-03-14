import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, SelectBox, Img, Heading } from "../../components";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DesktopThirteenPage() {
  const navigate= useNavigate ();
  const handlefourteen = () =>{
    navigate("/desktopfourteen");
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
        <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1255px]">
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
            <div className="flex flex-col items-start w-[76%] md:w-full ml-8 py-1 my-[22px]">
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
              <div className="h-[70px] w-[5px] mt-2.5 ml-[27px] z-[1] bg-green-500 rounded-[1px]" />
              <div className="flex items-center mt-[-2px] ml-[3px] gap-[5px]">
                <Heading
                  as="h2"
                  className="flex justify-center items-center h-[50px] w-[50px] border-black-900_19 border border-solid bg-white-A700 text-center rounded-[50%]"
                >
                  4
                </Heading>
                <Button
                  size="md"
                  shape="round"
                  color="light_blue_300_indigo_800"
                  className="sm:px-5 tracking-[0.15px] font-semibold !bg-gradient1 min-w-[225px]"
                >
                  Address Proof
                </Button>
              </div>
              <div className="h-[70px] w-[5px] ml-[27px] bg-gray-900_19 rounded-[1px]" />
              <div className="flex items-center ml-[3px] gap-3">
                <Heading
                  as="h3"
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
          <div className="flex flex-col items-start w-[51%] md:w-full p-7 sm:p-5 bg-white-A700 shadow-sm rounded-[10px]">
            <div className="flex w-[37%] md:w-full ml-1.5 py-px">
              <Text as="p" className="self-end mt-[3px] !text-gray-900">
                Address Proof
              </Text>
            </div>
            <Text size="s" as="p" className="w-[84%] md:w-full mt-2.5 ml-1.5 !text-gray-900_a5 !leading-[140%]">
              Please upload your Address proof below for completing your fifth step of KYC.
            </Text>
            <div className="flex flex-col items-end w-[80%] md:w-full mt-[25px] mb-[78px] ml-1.5">
              <div className="flex flex-col self-stretch mr-[195px] gap-1 py-3">
                <div className="flex w-[40%] md:w-full mt-2 ml-2.5">
                  <div className="flex w-full">
                    <Text size="s" as="p" className="!text-gray-900_a5">
                      Address proof
                    </Text>
                  </div>
                </div>
                <SelectBox
                  size="sm"
                  shape="round"
                  indicator={<Img src="images/img_polygon_3.svg" alt="Polygon 3" />}
                  name="address"
                  placeholder="Select Your Address proof"
                  options={dropDownOptions}
                  className="gap-px sm:pr-5 font-medium"
                />
              </div>
              <div className="flex flex-col items-start w-[63%] md:w-full mt-[42px] mr-[47px] gap-[15px] p-[22px] sm:p-5 border-black-900_1c border border-solid bg-white-A700 shadow-lg rounded-[20px]">
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
                onClick={handlefourteen}
                className="mt-[54px] mr-[52px] sm:px-5 tracking-[-0.32px] font-semibold min-w-[250px] rounded-[19px]"
              >
                Submit
              </Button>
              <Text size="s" as="p" className="w-[77%] md:w-full mt-4 !text-gray-900_a5 text-center">
                If you are facing any difficulties, please get in touch with us.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
