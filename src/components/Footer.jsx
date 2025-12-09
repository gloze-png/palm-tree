import React from 'react';
import { Link } from 'react-router-dom';
import {Icon} from "@iconify/react";

import gallery1 from "../assets/post2.jpg";
import gallery2 from "../assets/blog_02.jpg";
import gallery3 from "../assets/blog_03.jpg";
import gallery4 from "../assets/blog_04.jpg";
import gallery5 from "../assets/blog_05.jpg";
import gallery6 from "../assets/blog_06.jpg";


function Footer(){
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5,gallery6]
  return(
    <footer className='bg-primary text-white pt-10 pb-5 px-[2%] md:px-[8%] xl:px-[12%]'>
      <div className='max-w-7xl mx-auto border-t border-gray-600'>
        <div className='grid md:grid-cols-3 gap-10 py-15'>
          <div>
            <h3 className='text-white text-2xl font-semibold mb-3'>Information</h3>
            <p className='text-white'>
              From the moment our company was founded, we have helped our clients find
              expectional solutions <strong>for their businesses.</strong>
            </p>
          </div>
          {/* {Get In Touch} */}
          <div>
            <h3 className='text-white text-2xl font-semibold mb-3'>Get in Touch</h3>
            <p className='text-white mb-1'>
             Abuja, Nigeria
            </p>
            <p className='text-white mb-1'>
              +2349061273901
            </p>
            <p className='text-white'>
              info@antlinc.com
            </p>
          </div>
        {/* Gallery */}
        <div className='flex flex-wrap gap-3 justify-start md:justify-end'>
          {galleryImages.map((img, index) =>(
            <img 
            key={index}
            src={img}
            alt={`gallery-${index}`}
            className='rounded w-[90px] h-[70px] object-cover'
            />
          ))}

        </div>
        </div>
            <hr className='border-gray-700 mb-6' />
            <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
            <p className='text-white text-sm'>
        © {new Date().getFullYear()} 
        </p>
        </div>
      </div>

    </footer>
  )
}
export default Footer