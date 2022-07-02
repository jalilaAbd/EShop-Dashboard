import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const NavButton = ({ title, icon, color, dotColor, onclick }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={onclick}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ backgroundColor: dotColor }}
          className="absolute inline-flex rounded-full right-2 top-2 h-2 w-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

export default NavButton;
