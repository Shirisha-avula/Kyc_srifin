module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d9d9d9", 900: "#372e2e", "900_01": "#2e2f35" },
        black: {
          900: "#000000",
          "900_33": "#00000033",
          "900_19": "#00000019",
          "900_cc": "#000000cc",
          "900_1c": "#0000001c",
          "900_7f": "#0000007f",
        },
        white: { A700: "#ffffff" },
        gray: {
          100: "#f5f5f5",
          600: "#757575",
          900: "#1f1f1f",
          "900_a5": "#1f1f1fa5",
          "600_02": "#6d6d6d",
          "900_19": "#1f1f1f19",
          "600_01": "#7c7c7c",
        },
        green: { 500: "#4caf50" },
      },
      boxShadow: {
        xs: "0px 4px  40px 0px #00000019",
        sm: "4px 6px  30px 0px #0000004c",
        md: "4px 4px  4px 0px #0000003f",
        lg: "0px 2px  4px 0px #0000003f",
      },
      backgroundImage: {
        gradient: "linear-gradient(142deg, #56ccf2,#3a3b7b)",
        gradient1: "linear-gradient(147deg, #56ccf2,#3a3b7b)",
      },
      fontFamily: { roboto: "Roboto", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
