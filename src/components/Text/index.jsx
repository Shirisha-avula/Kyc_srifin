import React from "react";

const sizes = {
  xs: "text-xs font-normal leading-[15px]",
  s: "text-base font-medium leading-[21px]",
  md: "text-2xl font-medium leading-[140%]",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
