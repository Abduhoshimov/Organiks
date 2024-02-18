import React from 'react';


export const News = ({ icon: Icon, title, text, text2, BgImgs }) => {
    return (
        <li className='bg-no-repeat rounded-[40px] w-[750px] h-[500px] bg-Arapawa ' style={{ backgroundImage: `url(${BgImgs})` }}>
            <div className='text-Arapawa rounded-[50%] p-[15px] w-[82px] h-[82px] text-center mt-[46px] ml-[32px] bg-white text-[20px] font-extrabold leading-normal'>
                25 Nov
            </div>

            <div className='bg-white pt-[46px] pb-[60px] px-[57px]  w-[631px] h-[330px] mr-auto ml-auto mt-[100px] rounded-[30px]  shadow-md shadow-CityRain'>
                <div className='flex items-center gap-[7px] mb-[17px]'>
                    <Icon/>
                    <p className=' text-Arapawa text-[18px] leading-normal'>{title}</p>
                </div>

                <h3 className='text-Arapawa text-[25px] font-extrabold leading-normal mb-[7px]'>{text}</h3>
                <p className='w-[410px] text-CityRain mb-[17px] text-[18px] font-normal leading-tight'>{text2}</p>
                <button className='text-Arapawa text-[20px] font-bold py-[20px] px-[47px] bg-FunkyYellow rounded-[16px] leading-normal'>Read More</button>
            </div>
        </li>
    )
}
