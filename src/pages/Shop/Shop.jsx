import React from 'react'
import { productData } from './Shop-data'
import { ProductCard } from '../Home/components/product-card'
import { LetterComp } from '../../components/Letter-comp'
import Shopbanner from "../../assets/img/ShopBanner.png"
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid';

export const Shop = () => {
  return (
    <div>
      <section className='bg-no-repeat' style={{ backgroundImage: `url(${Shopbanner})` }}>
        <div className='container pt-[184px] pb-[162px] '>
          <h1 className='text-Arapawa text-[70px] w-[290px] mr-auto ml-auto font-extrabold leading-normal'>
            Shop
          </h1>
        </div>
      </section>

      <section className='bg-Doctor'>
        <div className="container pt-[90px] pb-[20px]">
          <ul className='flex items-center justify-center gap-y-[40px] gap-x-[20px] flex-wrap '>
            {
              productData?.map((item) => (<Link to={`/shopsingle/${item.id}`}><ProductCard key={nanoid()} {...item} /></Link>))
            }
          </ul>
          
        </div>
      </section>

      <LetterComp />
    </div>
  )
}
