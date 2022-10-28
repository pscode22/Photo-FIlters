import React from 'react';
import { ImageFilterContext } from '../../App';

export default function ImgEditBox1({classProps}) {

    const filterValue = React.useContext(ImageFilterContext);
    const { value, setValue } = filterValue;

    const handleValueChange = (e) => {
        const key = e.target.name;
        const currValue = e.target.value;
        // console.log( [key] , currValue)
    
        return setValue({...value, [key] : currValue})
    }

    const resetBtn = () => {
      return setValue({...value,
        contrast : 100, brightness : 100, saturate : 100, sepia : 0, 
        grayScale : 0, invert : 0, hueRotate : 0, blur : 0,
        opacity : 1, mixBlendMode : 'normal', background : 'rgba(0, 0 , 0, 0)',
      })
    }

  return (
    <div className={`box-border rounded-md w-[90%] h-fit m-5
     ${classProps} sticky top-5
      sm:w-[70%] sm:mb-10 lg:mb-0 md:w-[90%] xl:w-[90%] px-1 border-2 dark:border-slate-500 shadow-xl shadow-gray-300 dark:shadow-slate-500 
      dark:shadow-md`}
      >
        <section className='w-10rem'>

            <div className='gird grid-rows-2'>

                <div className='border-b-2 dark:border-gray-400 m-0 py-3 px-5 flex justify-between flex-wrap place-items-center'>
                  <span className='text-[#4f4f4f] font-bold text-lg dark:text-gray-300 tracking-wider'>EDITS</span>
                  <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
                   active:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                   onClick={resetBtn}>CLEAR ALL
                  </button>
                </div>

                <div className='p-[1.2rem]'>
                  <label className="form-label flex justify-between text-[#00000099] dark:text-gray-300" htmlFor="formContrast">
                    <strong>Contrast</strong><strong>{value.contrast}%</strong></label>
                  <input id="formContrast" name='contrast' type="range" value={value.contrast} className="mb-6 w-full h-1 rounded-lg appearance-none cursor-pointer 
                   range-sm bg-gray-300 dark:bg-gray-700" onChange={handleValueChange} min={0} max={200}
                  />
                  
                  <label className="form-label flex justify-between text-[#00000099] dark:text-gray-300" htmlFor="formBrightness">
                    <strong>Brightness</strong><strong>{value.brightness}%</strong></label>
                  <input id="formBrightness" name='brightness' type="range" value={value.brightness} className="mb-6 w-full h-1 rounded-lg appearance-none cursor-pointer 
                   range-sm bg-gray-300 dark:bg-gray-700" onChange={handleValueChange} min={0} max={200}
                  />
                  
                  <label className="form-label flex justify-between text-[#00000099] dark:text-gray-300" htmlFor="formSaturate">
                    <strong>Saturate</strong><strong>{value.saturate}%</strong></label>
                  <input id="formSaturate" name='saturate' type="range" value={value.saturate} className="mb-6 w-full h-1 rounded-lg appearance-none cursor-pointer 
                   range-sm bg-gray-300 dark:bg-gray-700" onChange={handleValueChange} min={0} max={200}
                  />
                  
                  <label className="form-label flex justify-between text-[#00000099] dark:text-gray-300" htmlFor="formSepia">
                    <strong>Sepia</strong><strong>{value.sepia}%</strong></label>
                  <input id="formSepia" name='sepia' type="range" value={value.sepia} className="mb-6 w-full h-1 rounded-lg appearance-none cursor-pointer 
                   range-sm bg-gray-300 dark:bg-gray-700" onChange={handleValueChange} min={0} max={100}
                  />
                  
                  <label className="form-label flex justify-between text-[#00000099] dark:text-gray-300" htmlFor="formGrayScale">
                    <strong>Grayscale</strong><strong>{value.grayScale}%</strong></label>
                  <input id="formGrayScale" name='grayScale' type="range" value={value.grayScale} className="mb-6 w-full h-1 rounded-lg appearance-none cursor-pointer 
                   range-sm bg-gray-300 dark:bg-gray-700" onChange={handleValueChange} min={0} max={100}
                  />
                  
                  <label className="form-label flex justify-between text-[#00000099] dark:text-gray-300" htmlFor="formInvert">
                    <strong>Invert</strong><strong>{value.invert}%</strong></label>
                  <input id="formInvert" name='invert' type="range" value={value.invert} className="mb-6 w-full h-1 rounded-lg appearance-none cursor-pointer 
                   range-sm bg-gray-300 dark:bg-gray-700" onChange={handleValueChange} min={0} max={100}
                  />
                  
                  <label className="form-label flex justify-between text-[#00000099] dark:text-gray-300" htmlFor="formhueRotate">
                    <strong>Hue Rotate</strong><strong>{value.hueRotate}deg</strong></label>
                  <input id="formhueRotate" name='hueRotate' type="range" value={value.hueRotate} className="mb-6 w-full h-1 rounded-lg appearance-none cursor-pointer 
                   range-sm bg-gray-300 dark:bg-gray-700" onChange={handleValueChange} min={-360} max={360} 
                  />
                  
                  <label className="form-label flex justify-between text-[#00000099] dark:text-gray-300" htmlFor="formBlur">
                    <strong>Blur</strong><strong>{value.blur}px</strong></label>
                  <input id="formBlur" name='blur' type="range" value={value.blur} className="mb-6 w-full h-1 rounded-lg appearance-none cursor-pointer 
                   range-sm bg-gray-300 dark:bg-gray-700" onChange={handleValueChange} min={0} max={10}      
                  />
                  
                  <label className="form-label flex justify-between text-[#00000099] dark:text-gray-300" htmlFor="formOpacity">
                    <strong>Opacity</strong><strong>{value.opacity}</strong></label>
                  <input id="formOpacity" name='opacity' type="range" value={value.opacity} className="mb-6 w-full h-1 rounded-lg appearance-none cursor-pointer 
                   range-sm bg-gray-300 dark:bg-gray-700" onChange={handleValueChange} min={0} max={1} step={0.1}     
                  />

                </div>
            </div>

        </section>
    </div>
  )
}
