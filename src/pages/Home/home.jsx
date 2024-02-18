import React from 'react'
import HeroBgImg from "../../assets/img/HeroBgImg.png";
import { HeroBtnIcon } from '../../assets/icon/hero-btn-icon';
import { fruitsData, aboutData, productsData, offerData, OrganicsData, newData } from './data';
import { FruitsCard } from './components/Fruits-card';
import about_img from "../../assets/img/about-us.png";
import { AboutComp } from './components/about';
import { ProductCard } from './components/product-card';
import sayBgImg from "../../assets/img/sayBgImg.png";
import say_img from "../../assets/img/Say_img.png";
import { Stars2 } from '../../assets/icon/Stars2';
import { SayIcon } from '../../assets/icon/say-icon';
import { Rating } from './components/rating';
import EcoBgimg from "../../assets/img/EcoBgImg.jpg";
import { Organics } from './components/Organics';
import { News } from './components/News';
import { LetterComp } from '../../components/Letter-comp';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

export const Home = () => {
  return (
    <div>
      <section className='Hero' style={{ backgroundImage: `url(${HeroBgImg})` }}>
        <div className='container py-[247px] pb-[195px]'>
          <h1 className='text-SeaLettuce font-ttyelow text-[36px]  '>100% Natural Food</h1>
          <p className='w-[580px] text-Arapawa text-[65px] font-extrabold mb-[23px]'>
            Choose the best
            healthier way <br />
            of life
          </p>
          <button className='py-[28px] px-[39px] rounded-md bg-FunkyYellow text-Arapawa text-[20px] font-bold' style={{ backgroundImage: `url(${HeroBtnIcon})` }}>Explore Now</button>
        </div>
      </section>

      <section className='Fruits'>
        <div className='container'>
          <div className='pt-[145px] pb-[190px] flex justify-center gap-[40px]'>
            {fruitsData.map((item) => <FruitsCard key={nanoid()} {...item} />)}
          </div>
        </div>
      </section>

      <section className='about_us bg-Doctor'>
        <div className='container flex items-center pb-[50px]'>
          <div>
            <img className='w-[1500px]' src={about_img} alt="" />
          </div>
          <div>
            <h2 className='text-salaPaduate font-ttyelow text-[36px] font-normal'> About Us </h2>
            <p className='text-Arapawa text-[50px] font-extrabold pb-[14px]'>We Believe in Working Accredited Farmers</p>
            <p className='text-CityRain text-[18px] font-normal leading-relaxed'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
            {
              aboutData.map((item) => <AboutComp key={nanoid()} {...item} />)
            }

            <button className='text-white text-base font-bold leading-normal rounded-lg bg-Arapawa py-[20px] mt-[16px] px-[39px]'>Shop Now</button>
          </div>
        </div>
      </section>

      <section className='Products bg-Doctor'>
        <div className='container pt-[176px] pb-[200px]'>
          <h2 className='text-salaPaduate text-center font-ttyelow text-[36px] font-normal leading-normal'>
            Categories
          </h2>
          <p className='text-Arapawa pb-[40px] text-center text-[50px] font-extrabold leading-normal'>Our Products</p>

          <div className='flex items-center flex-wrap gap-[20px] justify-center'>
            {
              productsData.map((item) => (<Link to={`/shopsingle/${item.id}`}><ProductCard key={nanoid()} {...item} /></Link>))
            }

            <button className='text-white text-base font-bold leading-normal rounded-lg bg-Arapawa py-[20px] mt-[122px] px-[49px]'>Load More</button>
          </div>
        </div>
      </section>

      <section className='Say bg-no-repeat w-full' style={{ backgroundImage: `url(${sayBgImg})` }}>
        <div className='container pt-[164px] pb-[145px] text-center'>
          <h2 className='text-salaPaduate font-ttyelow text-[36px] font-normal leading-normal'>Testimonial</h2>
          <p className='text-Arapawa text-[50px] font-extrabold leading-normal mb-[60px]'>What Our Customer Saying?</p>
          <div className='flex justify-center'>
            <img src={say_img} alt="" />
          </div>
          <div className='w-[122px] h-[26px] mr-auto ml-auto mt-[20px] flex justify-center mb-[26px]' >
            <Stars2 />
          </div>

          <div className='flex justify-center'>
            <p className="w-[780px] text-CityRain text-[20px] font-normal leading-tight">
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
            </p>
          </div>
          <p className='text-Arapawa mt-[20px] text-[30px] font-semibold leading-normal'>Sara Taylor</p>
          <p className='text-CityRain text-[18px] font-normal leading-tight'>Consumer</p>
          <div className='w-[35px] mr-auto ml-auto mt-[19px] mb-[102px]'>
            <SayIcon />
          </div>
          <div className='flex justify-center mb-[102px]'>
            <hr className='w-[1108px]' />
          </div>

          <ul className='flex items-center justify-center gap-[62px]'>
            <Rating statistics="100%" text="Organic" />
            <Rating statistics="285" text="Active Product" />
            <Rating statistics="350+" text="Organic Orchads" />
            <Rating statistics="25+" text="Years of Farming" />
          </ul>
        </div>
      </section>

      <section className='bg-Arapawa'>
        <div className='container py-[200px]'>
          <div >
            <div className='flex items-center justify-between px-[80px] mb-[50px]'>
              <div>
                <p className='text-salaPaduate font-ttyelow italic text-[36px] font-normal leading-normal'>Offer</p>
                <p className='text-white text-[50px] font-extrabold leading-normal'>We Offer Organic For You</p>
              </div>
              <div>
                <button className='rounded-[16px] bg-FunkyYellow py-[20px] px-[39px]'>View All Product</button>
              </div>
            </div>

            <ul className='flex items-center justify-center gap-[20px]'>
              {
                offerData.map((item) => <ProductCard key={nanoid()} {...item} />)
              }
            </ul>
          </div>
        </div>
      </section>

      <section className='Eco bg-no-repeat w-full' style={{ backgroundImage: `url(${EcoBgimg})` }}>
        <div className="container pt-[100px] pb-[85px]">
          <div className='bg-white rounded-[40px] flex items-center ml-[700px] pl-[80px] py-[78px] '>
            <div className='w-[610px]'>
              <p className='text-salaPaduate font-ttyelow italic text-[36px] font-normal leading-normal'>
                Eco Friendly
              </p>
              <p className='text-Arapawa text-[50px] font-bold leading-normal mb-[35px]'>
                Econis is a Friendly
                Organic Store
              </p>

              <p className='text-Arapawa text-[25px] font-medium leading-normal'>Start with Our Company First</p>
              <p className='text-CityRain text-[18px] font-normal leading-tight mb-[35px]'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.

              </p>

              <p className='text-Arapawa text-[25px] font-medium leading-normal'>Start with Our Company First</p>
              <p className='text-CityRain text-[18px] font-normal leading-tight mb-[35px]'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.

              </p>

              <p className='text-Arapawa text-[25px] font-medium leading-normal'>Start with Our Company First</p>
              <p className='text-CityRain text-[18px] font-normal leading-tight mb-[35px]'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.

              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='Organics bg-PeacefulRain'>
        <div className='py-[187px]'>
          <ul className='flex items-center justify-between'>
            {
              OrganicsData.map((item) => <Organics key={nanoid()} {...item} />)
            }
          </ul>
        </div>
      </section>

      <section>
        <div className="container py-[177px]">
          <p className='px-[80px] text-salaPaduate font-ttyelow italic text-[36px] font-normal leading-normal'>News</p>
          <div className='flex items-center justify-between px-[80px] mb-[45px]'>
            <div>
              <p className='text-Arapawa w-[702px] text-[50px] font-extrabold leading-normal'>Discover weekly content about organic food, & more</p>
            </div>
            <div>
              <button className='rounded-[20px] border-2 border-solid border-Arapawa bg-white py-[20px] px-[39px]'>More News</button>
            </div>
          </div>

          <ul className='flex items-center justify-between'>
            {
              newData.map((item) => <News key={nanoid()} {...item} />)
            }
          </ul>
        </div>
      </section>

      <LetterComp/>
    </div>
  )
}
