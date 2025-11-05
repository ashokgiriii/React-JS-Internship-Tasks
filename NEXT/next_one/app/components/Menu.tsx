import React from "react";

interface CountryProps {
  char: string;
  isActive: boolean;
}

const Menu = ({ char, isActive }: CountryProps) => {
  return (
    <div id={char} className={`char ${isActive ? "active" : ""}`}>
      {char}
    </div>
  );
};

export default Menu;
