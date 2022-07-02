import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
import { useStateContext } from "../contexts/ContextProvider";
import NavButton from "./NavButton";

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleScreenResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleScreenResize);
    handleScreenResize();
    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        icon={<AiOutlineMenu />}
        color={currentColor}
        onclick={() => setActiveMenu(!activeMenu)}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          icon={<FiShoppingCart />}
          color={currentColor}
          dotColor="blue"
          onclick={() => handleClick("cart")}
        />
        <NavButton
          title="Chat"
          icon={<BsChatLeft />}
          color={currentColor}
          dotColor="blue"
          onclick={() => handleClick("chat")}
        />
        <NavButton
          title="Notification"
          icon={<RiNotification3Line />}
          color={currentColor}
          dotColor="blue"
          onclick={() => handleClick("notification")}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 p-1 hover:bg-light-gray rounded-large"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="h-8 w-8 rounded-full" />
            <span className="text-14 text-gray-400">Hi, </span>
            <span className="text-14 font-bold text-gray-400 ml-1">User!</span>
            <MdKeyboardArrowDown className="text-14 text-gray-400" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
