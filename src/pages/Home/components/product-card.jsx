import React from 'react'

export const ProductCard = ({ img, title, text, price, discount, icon: Icon }) => {
    return (
        <li className='w-[335px] p-[30px] pb-[20px] rounded-[30px] bg-white'>
            <p className='text-white w-[96px] text-center py-[5px] px-[12px] rounded-md bg-Arapawa text-base font-semibold leading-normal'>{title}</p>
            <img className='h-[324px]' src={img} alt="img" />
            <p className='text-Arapawa text-[20px] font-semibold pt-[2px] pb-[13px]'>{text}</p>
            <hr />
            <div className='flex items-center justify-between pt-[10px]'>
                <div className='flex items-center gap-[8px]'>
                    <s className='text-FortressGrey text-[15px] font-semibold'>{discount}</s>
                    <p className='text-Arapawa text-[18px] font-bold'>{price}</p>
                </div>
                <Icon/>
            </div>
        </li>
    )
}
