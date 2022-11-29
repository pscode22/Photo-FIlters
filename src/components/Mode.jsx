import React, { useState } from 'react';
import {FaSun, FaMoon} from 'react-icons/fa';

window.onload = (() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
});

export default function Theme() {

    const [theme, setTheme] = useState();

    const themeSwitch = () => {
      if(document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setTheme('light');
        return;
      }
  
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark')
      return;
    }

  return (
    <div onClick={themeSwitch} className='cursor-pointer'>
     {
        theme === 'light' ?
        <FaSun size={30} className='text-[#FFCC00]' />
        :
        <FaMoon size={30} className='text-white'/>
     }
    </div>
  )
}
