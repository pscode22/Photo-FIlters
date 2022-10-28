import React from "react";
import { ImageFilterContext } from "../App";
import ImgEditBox1 from "./imageEditorBoxes/ImgEditBox1";
import ImgEditBox2 from "./imageEditorBoxes/ImgEditBox2";
import "../utility/styled.css";
import photo from "../digital_photo/samurai.jpg";
import { ImageContext } from "./ImageContext";
import FilterPalette from "./FilterPalette";

export default function ImageContainer({ imageRef }) {
  const [display, setDisplay] = React.useState("Filter");

  const filterValue = React.useContext(ImageFilterContext);
  const { value } = filterValue;

  const showImage = React.useContext(ImageContext);
  const { images } = showImage;

  const filterRef = React.useRef();
  const editRef = React.useRef();

  const imageFilter = {
    filter: `contrast(${value.contrast}%) brightness(${value.brightness}%) saturate(${value.saturate}%) 
            grayscale(${value.grayScale}%) sepia(${value.sepia}%) invert(${value.invert}%)
    hue-rotate(${value.hueRotate}deg) blur(${value.blur}px)`,
    opacity: `${value.opacity}`,
  };

  const handleClick = (e) => {
    const value = e.target.innerText;
    const className = "h-full flex justify-center items-center w-[50%]";
    value === "Filter" ? setDisplay("Filter") : setDisplay("Edit");
    filterRef.current.setAttribute("class", className);
    editRef.current.setAttribute("class", className);

    e.target.setAttribute("class", `${className} bg-blue-700 text-white`);
  };

  return (
    <>
      <div className="m-0 p-0 pb-4 lg:grid lg:grid-cols-3 relative border-0 ">
        <div className="border-0 border-indigo-700 lg:col-span-2 overflow-x-hidden">
          <div
            className="box-border border-0 border-orange-300 p-1 w-full sm:p-4 md:p-0 md:pt-4 mb-4 sm:mb-2 lg:mb-2
          md:w-[100%] md:h-fit   row-span-2 relative grid place-items-center"
          >
            <div
              className="relative w-[full] h-[400px] sm:w-[450px] p-1 sm:h-[450px] md:w-[600px] md:h-[520px]"
              ref={imageRef}
            >
              <img
                src={images?.name || photo}
                alt="city_bridge"
                className={`w-full h-full rounded-md border-transparent z-0 ${value.class} object-contain`}
                style={imageFilter}
              />
            </div>
          </div>

          <div className="box-border border-0 w-[full] h-fit mx-2 md:m-0 md:mt-4 relative pl-1 pr-1 ">
            {display === "Filter" ? <FilterPalette /> : <ImgEditBox2 />}

            <div
              className="w-full border  h-[42px] dark:text-white border-black  dark:border-gray-700 flex mt-2 font-mono font-extrabold cursor-pointer
              lg:hidden"
            >
              <div
                className="h-full flex justify-center items-center w-[50%] bg-blue-700 text-white"
                ref={filterRef}
                onClick={handleClick}
              >
                Filter
              </div>

              <div
                className="h-full flex justify-center items-center w-[50%] "
                onClick={handleClick}
                ref={editRef}
              >
                Edit
              </div>
            </div>
          </div>
        </div>

        <ImgEditBox1 classProps={`hidden lg:block lg:col-span-1`} />
      </div>
    </>
  );
}
