import React from 'react'

export const FruitsCard = ({bgImg, title, text, titlecolor, textcolor} ) => {
  const titlecolorr = titlecolor;
  let textColorr = textcolor;
  return (
    <div className='py-[115px] w-[680px] h-[367px] pl-[40px]' style={{backgroundImage: `url(${bgImg})`}}>
        <h2 className='font-ttyelow text-[36px] font-normal' style={{color: titlecolorr}}>{title}</h2>
        <p className='w-[320px] text-[40px] font-extrabold' style={{color: textColorr}}>{text}</p>
    </div>
  )
}
