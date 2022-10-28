import React from "react";
import { ImageFilterContext } from "../../App";
import Scroll from "../RangeBar";

export default function ImgEditBox2() {

  const filterValue = React.useContext(ImageFilterContext);
  const  { value } = filterValue;

  const [ screen, setScreen ] = React.useState(true);
  const [ arr, setArr ] = React.useState([]);

  const filterArr = [
    { name: "Contrast",   id: "contrast",   currValue: `${value.contrast}`,    unit:"%",   min:0, max:200,   step:"1.0" }, 
    { name: "Brightness", id: "brightness", currValue: `${value.brightness}`,  unit:"%",   min:0, max:200,   step:"1.0" }, 
    { name: "Saturate",   id: "saturate",   currValue: `${value.saturate}`,    unit:"%",   min:0, max:200,   step:"1.0" }, 
    { name: "Sepia",      id: "sepia",      currValue: `${value.sepia}`,       unit:"%",   min:0, max:100,   step:"1.0" },  
    { name: "Grayscale",  id: "grayScale",  currValue: `${value.grayScale}`,   unit:"%",   min:0, max:100,   step:"1.0" },   
    { name: "Invert",     id: "invert",     currValue: `${value.invert}`,      unit:"%",   min:0, max:100,   step:"1.0" },   
    { name: "Hue Rotate", id: "hue-rotate", currValue: `${value.hueRotate}`,   unit:"deg", min:-360, max:360,step:"1.0" },   
    { name: "Blur",       id: "blur",       currValue: `${value.blur}`,        unit:"px",  min:0, max:10,    step:"1.0" },   
    { name: "Opacity",    id: "opacity",    currValue: `${value.opacity}`,     unit:"",    min:0, max:1,     step:"0.1" }, 
  ];

  const handleClick = e => {
    const array = filterArr.filter(item => item.id === e.currentTarget.getAttribute("id"));
    setScreen(false);
    return  setArr(array);
  }

  return (
    <>
    {
      screen===true?
      <div
       className="w-[100%] box-border rounded grid   grid-cols-3 gap-2 sm:gap-3 place-items-center
       pb-1"
       >
        {filterArr.map((item, index) => (
          <div
            className="w-[100%] h-[46px] dark:bg-white grid place-items-center rounded-md dark:hover:bg-gray-400
            text-[8px] scale-105 sm:text-base font-semibold font-mono
            border border-gray-400 dark:border-transparent cursor-default"
            key={index}
            id={item.id}
            onClick={handleClick}
          >
            <span className="scale-125 sm:scale-100">{item.name} - {item.currValue}{item.unit}</span>
          </div>
        ))}
      </div>
      :
      <Scroll arr={arr} setScreen={setScreen}/>
    }
    </>
  );
}
