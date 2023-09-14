import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Logo from './Logo'
import { GithubIcon } from './Icon'
import Image from 'next/image'
import { motion } from 'framer-motion';
import githubmark from 'public/images/svgs/github-mark.png'
import medium from 'public/images/svgs/Medium-Symbol-Black-RGB@1x.png'

export const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    console.log(router);
    return(
        <Link href={href} className={`${className} relative group`}>
        {title}
        <span className={`
        h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `}>
            &nbsp;
        </span>
        </Link>
    )
}

const NavBar = () => {
    /*
     <div className='absolute left-[50%] justify-center translate-x-[-50%]'>
                <Logo/>
            </div>
    */

  return (
    <header className='fixed z-1 w-full text-primary border-1 border-color-dark'>
        <nav className='sticky z-1000 bg-neutral top-0 relative py-5 w-full px-32 font-medium flex items-center justify-between'>
            <div className='self-start z-1001 my-2 text-base-100'>
                <CustomLink href="#top" title="Home" className='mr-4'/>
                <CustomLink href="#demo" title="Demo" className='mx-4'/>
                <CustomLink href="#about" title="About Us" className='ml-4'/>
            </div>
        
            <div className ="flex self-end justify-center flex-wrap">
                <motion.a href="/" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className=" justify-center items-center">
                    <div className='w-9 h-9 rounded-full bg-white border-1 mx-1 my-1'>
                        <Image src={githubmark}/>
                    </div>  
                </motion.a>
                <motion.a href="/" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-9 h-9 mx-3 my-1 rounded-full items-center justify-center bg-white border-1 m-4">
                    <center className='my-1.5'>
                        <Image src={medium}/>
                    </center>
                </motion.a>
            </div>
            <div className='absolute left-[50%] justify-center translate-x-[-50%]'>
                <Logo/>
            </div>
        </nav>
    </header>
    
  )
}

export default NavBar


/*

 /*
    


    
    */
