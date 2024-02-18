import React from 'react'
import AboutBanner from "../../assets/img/AboutBanner.png";
import Aboutus2 from "../../assets/img/About-us2.png";
import { InfoData, MarketData, TeamData, aboutData2 } from './About-data';
import { AboutComp2 } from './components/AboutComp2';
import { DotIcon } from '../../assets/icon/About-icons/dot-icon';
import MarketImg from "../../assets/img/market_img.png";
import { MarketComp } from './components/MarketComp';
import { TeamComp } from './components/TeamComp';
import { InfoComp } from './components/InfoComp';
import { LetterComp } from '../../components/Letter-comp';
import { nanoid } from 'nanoid';


export const About = () => {
    return (
        <div>
            <section className='bg-no-repeat' style={{ backgroundImage: `url(${AboutBanner})` }}>
                <div className='container pt-[184px] pb-[162px] '>
                    <h1 className='text-Arapawa text-[70px] w-[290px] mr-auto ml-auto font-extrabold leading-normal'>
                        About Us
                    </h1>
                </div>
            </section>

            <section>
                <div className='container flex items-center pt-[167px] pb-[50px]'>
                    <div>
                        <img className='w-[1500px]' src={Aboutus2} alt="" />
                    </div>
                    <div>
                        <h2 className='text-salaPaduate font-ttyelow text-[36px] font-normal'> About Us </h2>
                        <p className='text-Arapawa text-[50px] font-extrabold pb-[14px]'>We do Creative Things for Success</p>
                        <p className='w-[640px] text-CityRain text-[18px] font-normal leading-relaxed'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. <br /> <br />

                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>
                        <div className='flex items-center justify-between mt-[48px] mb-[38px]'>
                            {
                                aboutData2.map((item) => <AboutComp2 key={nanoid()} {...item} />)
                            }
                        </div>

                        <button className='text-white text-base font-bold leading-normal rounded-lg bg-Arapawa py-[20px] mt-[16px] px-[39px]'>Shop Now</button>
                    </div>
                </div>
            </section>

            <section className='bg-Doctor'>
                <div className="container py-[190px]">
                    <div className='flex items-center justify-between mb-[91px]'>
                        <div>
                            <h2 className='text-salaPaduate font-ttyelow text-[36px] font-normal'> Why Choose us?</h2>
                            <p className='text-Arapawa text-[50px] w-[524px] font-extrabold mb-[25px]'>We do not buy from the open market & traders.</p>
                            <p className='w-[640px] text-CityRain text-[18px] font-normal leading-relaxed mb-[36px] '>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown </p>
                            <div className='flex items-center gap-[5px] py-[29px] pl-[27px] pr-[91px] bg-Coronation w-[339px] rounded-[49px] '>
                                <DotIcon />
                                <p className='text-Arapawa text-[20px] font-medium leading-normal'>
                                    100% Natural Product
                                </p>
                            </div>
                            <p className='text-CityRain w-[444px] mt-[12px] ml-[60px] mb-[25px] text-[18px] font-normal leading-tight'>
                                Simply dummy text of the printing and typesetting industry Lorem Ipsum
                            </p>
                            <div className='flex items-center gap-[5px] py-[29px] pl-[27px] pr-[91px] bg-Coronation w-[339px] rounded-[49px] '>
                                <DotIcon />
                                <p className='text-Arapawa text-[20px] font-medium leading-normal'>
                                    Increases resistance
                                </p>
                            </div>
                            <p className='text-CityRain w-[444px] mt-[12px] ml-[60px] mb-[25px] text-[18px] font-normal leading-tight'>
                                Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
                            </p>
                        </div>
                        <div>
                            <img src={MarketImg} alt="" />
                        </div>
                    </div>
                    <ul className='flex items-center gap-[30px] w-[1118px] mr-auto ml-auto'>
                        {
                            MarketData.map((item) => <MarketComp key={nanoid()} {...item} />)
                        }
                    </ul>
                </div>

            </section>

            <section className='team'>
                <div className="container pt-[177px] pb-[202px] ">
                    <h2 className='text-salaPaduate text-center font-ttyelow text-[36px] font-normal leading-normal'>
                        Team
                    </h2>
                    <p className='text-center text-Arapawa text-[50px] font-extrabold leading-normal'>
                        Our Organic Experts
                    </p>
                    <p className='text-CityRain w-[852px] mr-auto ml-auto text-center text-[18px] font-normal leading-tight'> 
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>

                    <ul className='flex items-center gap-[27px] justify-center mt-[42px]'>
                        {TeamData.map((item) => <TeamComp key={nanoid()} {...item}/>)}
                    </ul>
                </div>
            </section>

            <section className='Info bg-Arapawa'>
                <div className='container py-[188px] text-center'>
                        <h2 className='text-salaPaduate  font-ttyelow text-[36px] font-normal'>About Us</h2>
                        <p className='text-white text-[50px] font-extrabold leading-normal'>What We Offer for You</p>

                        <ul className='flex items-center justify-between mt-[25px]'>
                            {
                                InfoData?.map((item) => <InfoComp key={nanoid()} {...item} />)
                            }
                        </ul>
                </div>
            </section>

            <LetterComp/>
        </div>
    )
}
