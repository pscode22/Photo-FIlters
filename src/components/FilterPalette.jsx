import React from 'react';
import { ImageFilterContext } from '../App';
import { filterValues } from '../utility/utils';
import '../utility/styled.css';
import photo from '../digital_photo/samurai.jpg';
import { ImageContext } from './ImageContext';

function FilterPalette() {

  const filterValue = React.useContext(ImageFilterContext);
  const { setValue, constantValue } = filterValue;

  const showImage = React.useContext(ImageContext);
  const { images } = showImage;

  const handleClick = (e,effects) => {
    e.preventDefault();
    
    const getCss = getComputedStyle(e.target, ':before');
    const background = getCss.background;
    const mixBlendMode = getCss.mixBlendMode;

    const arr = e.target.name.split(','); 

    // console.log(getCss.background);

    const addedValues = { filterName : arr[0],  class : arr[1], background : background, mixBlendMode :  mixBlendMode };

    return setValue({...constantValue, ...effects, ...addedValues})
  }


  return (
    <div className=' box-border rounded grid grid-flow-col gap-3 scrollbar-thin scrollbar-thumb-rounded
     scrollbar-thumb-blue-700 scrollbar-track-gray-300  dark:scrollbar-track-gray-700 
     overflow-y-scroll pb-2 w-[100%]'>

      {
        filterValues.map(item => ( 
          <div className='w-[14rem] cursor-pointer'key={item.name}>
            <img src={ images?.name || photo }  alt='city_bridge' name={[item.name, item.class]} 
              className={`w-full  border-transparent rounded-md object-contain ${item.class}`} onClick={(e) => handleClick(e,item.filtersInObj)}
            /> 
            <span className='dark:text-white  font-mono'>{item.name}</span>
          </div>
        ))
      }

    </div>
  )
};

export default FilterPalette;
