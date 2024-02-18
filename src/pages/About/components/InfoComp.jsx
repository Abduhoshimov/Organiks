import React from 'react'

export const InfoComp = ({img, text}) => {
  return (
    <li>
        <img src={img} alt="img" />
        <p className='text-white mt-[20px] text-[25px] font-medium leading-normal'>{text}</p>
    </li>
  )
}
