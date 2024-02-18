import React from 'react'

export const AboutComp = ({ icon: Icon, title, text }) => {
    return (
        <div>
            <div className='flex items-center'>
                <div>
                    <Icon />
                </div>
                <div>
                    <h3 className='text-Arapawa text-[25px] font-extrabold leading-normal'>{title}</h3>
                    <p className='pb-[30px] w-[444px] text-CityRain text-base font-normal leading-[30px]'>{text}</p>
                </div>
            </div>
        </div>
    )
}
