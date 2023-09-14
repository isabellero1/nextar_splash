import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { LogoIcon } from './Icon'
import nextarLogo from '/Users/isabellero/Desktop/Splash/NextarSplash/public/images/svgs/nextar-logo-black.png'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <button className='flex items-center justify-center m-2'>
        <MotionLink href = "/"
        className = 'w-10 h-10 bg-light text-light flex items-center justify-center rounded-full m-4'
        
        whileHover={{
            backgroundColor:["#f9f9f9", "rgba(252,176,69,1)", "rgba(252,176,69,1)","#f9f9f9"],
            transition: {duration: 2, repeat: Infinity} 
        }}     
        ><Image src={nextarLogo}/></MotionLink>
    </button>
  )
}

export default Logo