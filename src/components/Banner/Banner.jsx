import React from 'react'
import BannerImg from "../../assets/pizzanutella.jpg"

function Banner() {
  return (
    <>
        <div className='container py-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='flex justify-center items-center'>
                    <img src={BannerImg} alt=''></img>
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-3xl font-semibold'>
                        También aprovecha de las delicias de lo dulce en <span className='text-primary'>VENTI</span> 
                    </h1>
                </div>
            </div>

        </div>
    </>
  )
}

export default Banner