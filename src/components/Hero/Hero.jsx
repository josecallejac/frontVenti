import React from 'react';
import HeroImg from "../../assets/pizza.png";

function Hero() {
  return (
    <div>
        <div className='container grid grid-cols-1 md:grid-cols-2
                        min-h-[600px] gap-8'>
            {/* section de texto*/}
            <div className='flex flex-col justify-center gap-5
                            text-center  md:text-left pt-24 pb-10
                            md:p-0'>
                <h1 className='text-4xl font-semibold'>
                    Exquisitas pizzas están esperando por ti
                </h1>
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi aliquid necessitatibus aliquam unde quaerat mollitia inventore ratione voluptatibus! Ea.
                </p>
                <div className='flex gap-3 items-center md:justify-start justify-center'>
                    <button className='primary-btn hover:scale-105 duration-200'>Menu</button>
                    <button className='secondary-btn text-black hover:scale-105 duration-200'>Book table</button>
                </div>
            </div>
            {/* section de imagen */}
            <div className='flex flex-col justify-center'>   
                <img src={HeroImg} alt='' className='animate-spin-slow img-shadow w-[400px] mx-auto'></img>
            </div>
        </div>
    </div>
  )
}

export default Hero