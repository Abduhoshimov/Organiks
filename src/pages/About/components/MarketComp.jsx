import React from 'react'

export const MarketComp = ({ icon: Icon, title, text }) => {
    return (
        <li className='w-[257px] h-[335px] text-center bg-white rounded-[30px]'>
            <div className='w-[95px] h-[95px] flex items-center justify-center mt-[50px] mr-auto ml-auto'>
                <Icon />
            </div>
            <h3 className='text-Arapawa text-[25px] mt-[15px] font-extrabold leading-normal'>
                {title}
            </h3>
            <p className='text-CityRain mt-[12px] w-[184px] mr-auto ml-auto text-[18px] font-normal leading-tight'>
                {text}
            </p>
        </li>
    )
}
