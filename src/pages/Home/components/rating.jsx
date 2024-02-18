import React from 'react'

export const Rating = ({statistics, text}) => {
  return (
    <div className='w-[212px] h-[212px] border-solid border-[4px] rounded-[50%] border-salaPaduate'>
        <div className='bg-Doctor w-[185px] h-[185px] rounded-[50%] mx-auto m-[10px]'>
            <p className='text-center text-5xl font-roboto font-extrabold text-Arapawa pt-[57px] mb-[8px]'>
                {statistics}
            </p>

            <p className='text-xl font-semibold leading-tight text-Arapawa'>
                {text}
            </p>
        </div>
    </div>
  )
}
