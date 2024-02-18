import React from 'react'
import Logo from "../../assets/img/Logo.png";
import { pages } from "./data"
import { Link } from 'react-router-dom';
import { InputSearch } from '../../assets/icon/input-search';
import { KorzinaIcon } from '../../assets/icon/korzina-icon';

export const Header = () => {
    return (
        <header className="header">
            <div className="container py-[30px]">
                <div className='flex items-center'>
                    <Link to="/"><img src={Logo} alt="" /></Link>
                    <ul className="flex items-center gap-[30px] pl-[100px]">
                        {pages.map((route) => (
                            <Link className='text-Arapawa text-2xl font-bold leading-normal' key={route.path} to={route.path}>
                                {route.name}
                            </Link>
                        ))}
                    </ul>
                    <div className='flex items-center ml-[100px] rounded-[36px] p-[4px] bg-DRwhite '>
                        <input className=' w-[314px] rounded-[36px] pl-[15px] py-[20px] text-Arapawa text-2xl bg-DRwhite outline-none ' type="text" />
                        <InputSearch />
                    </div>

                    <div className='flex items-center gap-[12px] ml-[18px] rounded-[33px] border border-ChristmasSilver p-[6px] pr-[23px]'>
                        <KorzinaIcon />
                        <p className='text-Arapawa font-roboto text-[18px] font-semibold'>
                            Cart(0)
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}
