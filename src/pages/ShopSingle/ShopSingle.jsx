import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { productData } from '../Shop/Shop-data'
import { ProductCard } from '../Home/components/product-card'
import { LetterComp } from '../../components/Letter-comp'
import ShopSingleBanner from "../../assets/img/ShopSingleBanner.png"
import { useParams } from 'react-router-dom';
import { Stars } from '../../assets/icon/stars'
import { nanoid } from 'nanoid';



export const ShopSingle = () => {
  
  React.useEffect(() => {
    window.scrollTo(450, 450);
  }, []);


  const { id } = useParams();
  const product = productData.find((item) => item.id == parseInt(id));
  console.log(product);

  if (!product) {
    return <div>
      <section className='bg-no-repeat' style={{ backgroundImage: `url(${ShopSingleBanner})` }}>
        <div className='container pt-[184px] pb-[162px] '>
          <h1 className='text-Arapawa text-[70px] w-[390px] mr-auto ml-auto font-extrabold leading-normal'>
            Shop Single
          </h1>
        </div>
      </section>

      <section className=''>
        <div className='container text-center mb-[40px]'>
          <div className='mt-[72px] flex items-center justify-center bg-white '>
            <div className="flex items-center justify-center gap-[20px] mb-[27px]">
              <button className="w-[363px] font-bold text-[25px] text-white bg-Arapawa px-[57px] py-[20px] rounded-lg">Product Description</button>
              <button className="w-[363px] font-bold text-[25px] text-Arapawa bg-HeavySugar px-[57px] py-[20px] rounded-lg">Additional Info</button>
            </div>
          </div>
          <p className='w-[1110px] mr-auto ml-auto text-CityRain text-[18px] font-normal leading-tight'>
            Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8-10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.
          </p>
        </div>
      </section>

      <section className='p-[5rem] flex flex-col items-center justify-center bg-Doctor'>
        <h1 className='text-4xl font-black text-blue-950'>Related Products</h1>
        <div className="mt-[3rem] flex flex-wrap items-center justify-center gap-6">
          {productData?.slice(0, 4).map((item) => (
            <Link to={`${item.id}`} > <ProductCard key={nanoid()} {...item} /> </Link>
          ))}
        </div>
      </section>

      <LetterComp />
    </div>;
  }

  const { img, title, text, price, discount } = product;

  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="bg-white">
      <section className='bg-no-repeat' style={{ backgroundImage: `url(${ShopSingleBanner})` }}>
        <div className='container pt-[184px] pb-[162px] '>
          <h1 className='text-Arapawa text-[70px] w-[390px] mr-auto ml-auto font-extrabold leading-normal'>
            Shop Single
          </h1>
        </div>
      </section>

      <section className='w-full h-[700px] flex flex-col items-center justify-center bg-Doctor'>
        <div className="pt-28 pb-16 flex items-center justify-center gap-20">
          <div className='p-6 flex flex-col items-start justify-center bg-white rounded-xl'>
            <p className="productTyoes px-4 py-1 text-center font-bold rounded-md text-white bg-blue-950">
              {title}
            </p>
            <img className='w-full' src={img} alt="img" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h1 className='pb-1 text-3xl font-bold text-Arapawa'>
              {text}
            </h1>
            <Stars />
            <p className='mt-4 font-semibold flex items-center justify-start gap-2'>
              <s>{discount}</s>
              <span className='font-bold text-Arapawa'>{price}</span>
            </p>
            <p className='w-[550px] my-8 font-normal text-CityRain'>
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
            <div className="flex items-center justify-start gap-4">
              <p className='text-lg font-bold text-blue-950'>Quantity:</p>
              <div className="py-2 px-4 flex items-center justify-center gap-3 font-bold rounded-lg border-2 border-base-100 text-base-100">
                <button className='w-[30px] h-[30px text-2xl font-black' onClick={handleDecrement}>-</button>
                <h4 className='px-2 text-center text-4xl'>{quantity}</h4>
                <button className='w-[30px] h-[30px text-2xl font-black' onClick={handleIncrement}>+</button>
              </div>
              <button className='text-white bg-Arapawa rounded-[16px] py-[25px] px-[39px] text-[20px] font-bold leading-normal'>Add To Cart</button>
            </div>
          </div>
        </div>
      </section>

      <section className=''>
        <div className='container text-center mb-[40px]'>
          <div className='mt-[72px] flex items-center justify-center bg-white '>
            <div className="flex items-center justify-center gap-[20px] mb-[27px]">
              <button className="w-[363px] font-bold text-[25px] text-white bg-Arapawa px-[57px] py-[20px] rounded-lg">Product Description</button>
              <button className="w-[363px] font-bold text-[25px] text-Arapawa bg-HeavySugar px-[57px] py-[20px] rounded-lg">Additional Info</button>
            </div>
          </div>
          <p className='w-[1110px] mr-auto ml-auto text-CityRain text-[18px] font-normal leading-tight'>
            Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8-10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.
          </p>
        </div>
      </section>

      <section className='p-[5rem] flex flex-col items-center justify-center bg-Doctor'>
        <h1 className='text-4xl font-black text-blue-950'>Related Products</h1>
        <div className="mt-[3rem] flex flex-wrap items-center justify-center gap-6">
          {productData?.slice(0, 4).map((item) => (
            <Link to={`/shopsingle/${item.id}`} > <ProductCard key={nanoid()} {...item} /> </Link>
          ))}
        </div>
      </section>

      <LetterComp />
    </div>
  )
}