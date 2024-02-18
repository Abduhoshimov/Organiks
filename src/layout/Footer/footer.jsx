import React from 'react';
import Logo from "../../assets/img/Logo.png";
import { Link } from 'react-router-dom';
import { InstagramIcon } from '../../assets/icon/instagram-icon';
import { FacebookIcon } from '../../assets/icon/facebook-icon';
import { TwitterIcon } from '../../assets/icon/twitter-icon';
import { PinterestIcon } from '../../assets/icon/pinterest-icon';

export const Footer = () => {
  return (
    <footer className='footer flex flex-col items-center justify-center bg-white'>
      <div className="w-full py-[4rem] footer-top flex items-start justify-center gap-12">
        <div className="footer-start flex flex-col items-end justify-center gap-4 text-gray-500">
          <h2 className='text-2xl font-bold text-blue-950'>Contact Us</h2>
          <p className='text-end '>
            <strong>Email</strong>
            <p>needhelp@Organia.com</p>
          </p>
          <p className='text-end'>
            <strong>Phone</strong>
            <p>666 888 888</p>
          </p>
          <p className='text-end'>
            <strong>Address</strong>
            <p>88 road, borklyn street, USA</p>
          </p>
        </div>
        <div className="footer-center flex flex-col items-center justify-center gap-6 border-x-2 px-12">
          <Link to="/"><img src={Logo} alt="" /></Link>
          <p className='font-semibold text-gray-400'>
            Simply dummy text of the printing and typesetting industry. <br />
            Lorem Ipsum simply dummy text of the printing
          </p>
          <div className="footer-icons flex items-center justify-center gap-4">
            <div className="flex items-center justify-center p-4 text-xl rounded-full bg-salaPaduate">
              <img src={InstagramIcon} alt="" />
            </div>
            <div className="flex items-center justify-center p-4 text-xl rounded-full bg-salaPaduate">
              <img src={FacebookIcon} alt="" />
            </div>
            <div className="flex items-center justify-center p-4 text-xl rounded-full bg-salaPaduate">
              <img src={TwitterIcon} alt="" />
            </div>
            <div className="flex items-center justify-center p-4 text-xl rounded-full bg-salaPaduate">
              <img src={PinterestIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="footer-end flex flex-col items-start justify-center gap-4 text-Arapawa">
          <h2 className='text-2xl font-bold text-blue-950'>Utility Pages</h2>
          <p>Style Guide</p>
          <p>404 Not Found</p>
          <p>Password Protected</p>
          <p>Licences</p>
          <p>Changelog</p>
        </div>
      </div>
      <hr className='w-full mb-[17px]' />
      <p className='text-CityRain text-center text-[18px] font-normal mb-[22px] leading-tight'>
        Copyright © <span className='font-bold'>Organick</span> | Designed by <span className='font-bold'>VictorFlow</span> Templates - Powered by <span className='font-bold'>Webflow</span>
      </p>
    </footer>
  )
}
