import React from 'react'
import NotFoundImg from "../../assets/img/NotFoundimg.png"
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <section className='NotFound w-full px-5 h-[898px] flex justify-end' style={{backgroundImage: `url(${NotFoundImg})`}}>
          <div className="mt-[120px] mr-[275px] items-start">
            <h1 className='text-[270px] font-black text-SnowCrystalGreen'>404</h1>
            <h4 className='mt-[-70px] text-Arapawa text-center text-[70px] font-extrabold leading-normal'>Page not found</h4>
            <p className='text-CityRain text-[18px] font-semibold leading-tight mb-[40px]'>The page you are looking for doesn't exist or has been moved</p>
            <Link to="/"><button className='text-white py-[25px] px-[49px] rounded-[16px] bg-Arapawa text-[20px] font-bold leading-normal'>Go to Homepage</button></Link>
            
          </div>
      </section>
    )
  }