import React from 'react'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='bg-[#161331] py-3 text-[#D0CDEF]'>
  <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
        <div>
            <h1>Luxbot</h1>
        </div>

        <div>
            Copyright: © 2025 Redfin. All rights reserved.
        </div>
        <div>
            <div>
                <h1 className='uppercase text-sm font-medium mb-2'>Follow us on</h1>
            </div>
           <div className='flex items-center gap-4'>
             <div>
                <div className='w-8 h-8 rounded-full bg-[#D0CDEF] flex items-center justify-center'>
                    <FaInstagram className='text-black text-xl' />
                </div>
            </div>
            <div>
                <div className='w-8 h-8 rounded-full bg-[#D0CDEF] flex items-center justify-center'>
                    <FaFacebookF  className='text-black text-xl' />
                </div>
            </div>
            <div>
                <div className='w-8 h-8 rounded-full bg-[#D0CDEF] flex items-center justify-center'>
                    <FaTwitter className='text-black text-xl' />
                </div>
            </div>
            <div>
                <div className='w-8 h-8 rounded-full bg-[#D0CDEF] flex items-center justify-center'>
                    <FaLinkedinIn className='text-black text-xl' />
                </div>
            </div>
           </div>
        </div>
      </div>
  </div>
    </section>
  )
}

export default Footer
