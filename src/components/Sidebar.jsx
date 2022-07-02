import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiTrustedshops } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    currentColor,
  } = useStateContext();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  const handleClose = () => {
    if (screenSize <= 900 && activeMenu) setActiveMenu(false);
  };

  return (
    <div className="ml-3 pb-10 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className=" flex items-center text-xl font-extrabold tracking-tight text-slate-900 dark:text-white gap-3 ml-3 mt-4"
              onClick={() => handleClose}
            >
              <SiTrustedshops />
              EShop
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((l) => (
              <div key={l.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{l.title}</p>
                {l.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleClose}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
