import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[15px]",
};
const variants = {
  gradient: {
    light_blue_300_indigo_800: "bg-gradient text-white-A700",
  },
  outline: {
    teal_300_indigo_800: "border border-solid teal_300_indigo_800_border text-blue_gray-900",
  },
  fill: {
    blue_gray_100: "bg-blue_gray-100",
  },
};
const sizes = {
  md: "h-[47px] px-[29px] text-[22px]",
  xs: "h-[27px] pl-5 pr-[29px] text-sm",
  sm: "h-[40px] px-[35px] text-base",
  lg: "h-[50px] px-4",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "gradient",
  size = "sm",
  color = "blue_gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["md", "xs", "sm", "lg"]),
  variant: PropTypes.oneOf(["gradient", "outline", "fill"]),
  color: PropTypes.oneOf(["light_blue_300_indigo_800", "teal_300_indigo_800", "blue_gray_100"]),
};

export { Button };
