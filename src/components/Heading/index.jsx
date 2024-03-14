import React from "react";

const sizes = {
  s: "text-2xl font-semibold leading-[29px]",
  md: "text-[38px] font-semibold leading-[140%]",
  xs: "text-[10px] font-semibold leading-3",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-600_02 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
