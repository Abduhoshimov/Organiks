import React from 'react'
import LetterBgImg from "../assets/img/LetterBgImg.png"


export const LetterComp = () => {
  return (
    <div className='mt-[150px] mb-[50px]'>
        <div className="container bg-no-repeat w-[1405px] mr-auto ml-auto  h-[325px]" style={{ backgroundImage: `url(${LetterBgImg})` }}>
          <div className='flex items-center justify-between pt-[90px] px-[50px]'>
            <div>
              <h2 className='text-white w-[357px] text-[48px] font-extrabold leading-normal'>Subscribe to
                our Newsletter
              </h2>
            </div>
            <div className='flex items-center gap-[6px]'>
              <input type="text"
              placeholder='Your Email Address' 
              className='py-[30px] pl-[23px] pr-[174px] rounded-[16px] italic ' 
              />
              <button className='text-white py-[25px] px-[47px] bg-Arapawa rounded-[16px] text-[20px] font-bold leading-normal '>Subscribe</button>
            </div>
          </div>
        </div>
    </div>
  )
}
