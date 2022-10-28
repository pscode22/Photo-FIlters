import React from "react";
import "./App.css";
import Header from "./components/Header";
import ImageProvider from "./components/ImageContext";
import ImageContainer from "./components/ImageContainer.jsx";

export const ImageFilterContext = React.createContext();

const constantValue = {
  filterName: "None",
  class: "#no-filter",
  contrast: 100,
  brightness: 100,
  saturate: 100,
  sepia: 0,
  grayScale: 0,
  invert: 0,
  hueRotate: 0,
  blur: 0,
  opacity: 1,
  mixBlendMode: "normal",
  background: "",
};

function App() {
  const [value, setValue] = React.useState(constantValue);
  const [filterName, setFilterName] = React.useState("None")

  return (
    <ImageFilterContext.Provider value={{ value, setValue, constantValue }}>
      <ImageProvider>
        <div className="App dark:bg-[#010409] h-fit">
          <Header />
          <ImageContainer filterName={filterName} setFilterName={setFilterName}/>
        </div>
      </ImageProvider>
    </ImageFilterContext.Provider>
  );
}

export default App;
