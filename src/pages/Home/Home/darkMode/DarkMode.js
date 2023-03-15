import React from 'react';
import {  FaSun, } from 'react-icons/fa'
import moon from '../../../../assets/icons/moon-icon-0 (1).png'
const DarkMode = () => {
    return (
        <div>
            
            <button className=''> <img src={moon} id="icon" className='w-8 ' alt="" /></button>
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            } else {
            document.documentElement.classList.remove('dark')
            }

           

                    
                        
     </div>
    );
};

export default DarkMode;