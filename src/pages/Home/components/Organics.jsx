import React from 'react'

export const Organics = ({ BgImg, text }) => {
    return (
        <li className='bg-no-repeat w-[600px] h-[600px] ' style={{ backgroundImage: `url(${BgImg})` }}>
            <div className='flex pt-[240px] justify-center'>
                <button className='text-Arapawa text-lg text-[28px] font-medium py-[33px] px-[83px] bg-white rounded-lg leading-normal'>{text}</button>
            </div>
        </li>
    )
}
