import React, { createContext, useContext, useState } from "react";

const ContextState = createContext();
const initialState = {
  cart: false,
  chat: false,
  userProfile: false,
  notification: false,
};
const initialColor = "#FB9678";

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState(initialColor);
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("themeColor", color);
    setThemeSettings(false);
  };
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  const handleClose = () => {
    setIsClicked({ ...initialState });
  };
  return (
    <ContextState.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        handleClick,
        handleClose,
        screenSize,
        setScreenSize,
        currentColor,
        setColor,
        currentMode,
        setMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </ContextState.Provider>
  );
};

export const useStateContext = () => useContext(ContextState);
