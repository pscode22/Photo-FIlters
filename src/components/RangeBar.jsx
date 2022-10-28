import React from "react";
import { TiArrowBack } from "react-icons/ti"
import { ImageFilterContext } from "../App";

export default function Scroll({ arr, setScreen, setFilterName }) {

  const filterValue  = React.useContext(ImageFilterContext);
  const { value, setValue } = filterValue;

  const { name, id, currValue, unit, min, max, step } = arr[0];

  const [ state, setState ] = React.useState({[id] : currValue});

  const handleChange = e => {
    const key = e.target.name;
    const currValue = e.target.value;

    setState({...state, [key] : currValue });
    setFilterName("Custom");

    return setValue({...value, [key] : currValue})
  }

  return (
    <div className="h-[160px] w-full grid place-items-center p-2">

      <label
        className="form-label flex justify-between text-[#00000099] dark:text-gray-300  w-[95%] text-xl"
        htmlFor="formSaturate"
      >
        <strong>{name}</strong>
        <strong>{state[id]}{unit}</strong>
        <div className="border-2 rounded-full cursor-pointer"><TiArrowBack size={24} onClick={() => setScreen(true)}/></div>
      </label>
      <input
        id={`form${name}`}
        name={id}
        type="range"
        value={state[id]}
        className="mb-6 w-full h-1 rounded-lg appearance-none cursor-pointer range-sm bg-gray-300 dark:bg-gray-700"
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
      />

    </div>
  );
}
