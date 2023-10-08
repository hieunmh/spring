'use client'

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'> 
          <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2}}
          >
            <Image src='/draven.jpg' width={192} height={192} quality={95} priority={true}  alt='draven' 
              className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
            />
          </motion.div>

          <motion.span className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Hieu.</span> I'm a {' '}
        <span className='font-bold'>Student</span> in {' '}
        <span className='font-bold'>UET-VNU</span>
      </motion.p>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 
          rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        >
          Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /> {' '}
        </Link>

        <a className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 
        rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer 
        borderBlack'
          href="https://facebook.com/pt.minhieu"
          target="_blank"
        >
          <BsFacebook />
        </a>

        <a className='bg-white p-4 text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full 
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition 
          cursor-pointer borderBlack '
          href="https://github.com/hieunmh"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  )
}
