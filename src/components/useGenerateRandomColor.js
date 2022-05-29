import { useState } from "react";

const useGenerateRandomColor = () => {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");
  const generateColor1 = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    setColor1(`rgb(${red},${green},${blue})`);
  };
  const generateColor2 = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    setColor2(`rgb(${blue},${blue},${green})`);
  };
  const generateColor3 = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    setColor3(`rgb(${green},${green},${blue})`);
  };
  const generateColor4 = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    setColor4(`rgb(${red},${green},${green})`);
  };
  const generateColor5 = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    setColor5(`rgb(${red},${red},${red})`);
  };

  return {
    color1,
    color2,
    color3,
    color4,
    color5,
    generateColor1,
    generateColor2,
    generateColor3,
    generateColor4,
    generateColor5,
  };
};
export default useGenerateRandomColor;
