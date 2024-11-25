import React from 'react'
import Profile from "../../assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";


function Navbar() {
  return (
    <div className='py-4'>
        <div className="container flex justify-between items-center">
            <div>
                <p className='text-lg font-semibold'>
                    PIZZERIA <span className='text-primary'>VENTI</span>
                </p>
            </div>
            <div className='hidden sm:block'>
                <ul className='flex gap-7'>
                    <li className='hover:border-b-2 border-primary uppercase'>Home</li>
                    <li className='hover:border-b-2 border-primary uppercase'>Menu</li>
                    <li className='hover:border-b-2 border-primary uppercase'>Nosotros</li>
                </ul>
            </div>
            <div className='flex gap-4 items-center'>
                <img src={Profile} alt='' className='w-10 rounded-full'></img>
                <IoIosArrowDown />            
            </div>

        </div>
    </div>
  )
}

export default Navbar