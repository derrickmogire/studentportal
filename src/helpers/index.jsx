import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDescription } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsGear, BsQuestionCircle } from "react-icons/bs";
export const navItems = [
  {
    link: "/",
    icon: <GoHome size={40} />,
    name: "Home",
  },
  {
    link: "/profile",
    icon: <CgProfile size={40} />,
    name: "Profile",
  },
  {
    link: "/results",
    icon: <MdOutlineDescription size={40} />,
    name: "Results",
  },
  {
    link: "/analytics",
    icon: <TbBrandGoogleAnalytics size={40} />,
    name: "Analytics",
  },
  {
    link: "/settinngs",
    icon: <BsGear size={40} />,
    name: "Settings",
  },
  {
    link: "/help",
    icon: <BsQuestionCircle size={40} />,
    name: "Help",
  },
];
