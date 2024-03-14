import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import DesktopTwelve from "pages/DesktopTwelve";
import DesktopThirteen from "pages/DesktopThirteen";
import DesktopFourteen from "pages/DesktopFourteen";
import KYC from "pages/Kyc";
import DesktopEleven from "pages/DesktopEleven";
import DesktopTen from "pages/DesktopTen";
import Desktopfifteen from "pages/Desktopfifteen.jsx";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <KYC /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopten",
      element: <DesktopTen />,
    },
    {
      path: "desktopeleven",
      element: <DesktopEleven />,
    },
    {
      path: "desktoptwelve",
      element: <DesktopTwelve/>,
    },
    {
      path: "desktopthirteen",
      element: <DesktopThirteen />,
    },
    {
      path: "desktopfourteen",
      element: <DesktopFourteen />,
    },
    {
      path: "desktopfifteen",
      element: <Desktopfifteen />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
