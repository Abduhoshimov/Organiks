import React from 'react'

export const TeamComp = ({ img, title, text, icon: Icon, icon2: Icon2, icon3: Icon3 }) => {
    return (
        <li className='shadow-md shadow-CityRain rounded-[30px] pb-[34px]'>
            <div>
                <img src={img} alt="img" />
            </div> 
            <h3 className='mt-[35px] text-Arapawa text-[25px] px-[28px] font-extrabold leading-normal'>
                {title}
            </h3>
            <div className='flex items-center justify-between px-[28px]'>
                <div>
                    <p className='text-salaPaduate font-ttyelow text-[22px] font-normal leading-normal'>
                        {text}
                    </p>
                </div>
                <div className='flex items-center gap-[7px]'>
                    <Icon />
                    <Icon2 />
                    <Icon3 />
                </div>
            </div>

        </li>
    )
}
