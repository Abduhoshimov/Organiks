import React from 'react'

export const AboutComp2 = ({icon: Icon, title}) => {
  return (
    <div className='flex items-center gap-[15px]'>
        <Icon/>
        <h3 className='text-Arapawa text-[25px] w-[226px] font-medium leading-normal'>{title}</h3>
    </div>
  )
}
