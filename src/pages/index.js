import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '@/styles/Home.module.css'
import AnimatedText from '@/components/AnimatedText'
import Profile from '@/components/Profile'
import beetheme from '/Users/isabellero/Desktop/Splash/NextarSplash/public/images/svgs/icons8-bee-48.png'
import lighttheme from '/Users/isabellero/Desktop/Splash/NextarSplash/public/images/svgs/icons8-light-mode-78.png'
import darktheme from '/Users/isabellero/Desktop/Splash/NextarSplash/public/images/svgs/icons8-dark-mode-50.png'
import NavBar from '@/components/NavBar'
import { useRouter} from 'next/router'
import Link from 'next/link'
import { LogoIcon } from '@/components/Icon'
import { theme } from '../../tailwind.config'
import sshot from '/Users/isabellero/Desktop/Splash/NextarSplash/public/images/svgs/spelb.png'

const inter = Inter({ subsets: ['latin'] })

export const CustomLink = ({href, title, className=""}) => {
  useState
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

export default function Home() {
  const[theme,upTheme] = useState('normal');

  const setTheme = (theme) => {
    document.querySelector('html').setAttribute('data-theme', theme);
  };
  
  return (
    <>
      
      <div id='main' className='bg-secondary'>

        <div id="inner" className='bg-secondary pt-50'>
          

          <div id="top" className='flex bg-accent items-center text-dark w-full min-h-screen'>
            <Layout>
              <div className = "flex items-center justify-between w-full">
                <div>
                <Image src= {sshot} className='w-45 h-25'/>
                </div>
                <div className='w-1/2 flex flex-col items-center self-center text-center'>
                  <AnimatedText text="{ Nextar }" className='!text-center'/>
                  <p className="my-4 text-base font-medium"> 
                    The sweetest Next.js solution for developers by developers Amuyla, Andrew, Isabelle, and Julia
                  </p>
                </div>
              </div>
            </Layout>
          </div>

          <AnimatedText text="Demo"/>

          <div id="demo" className='flex bg-secondary items-center text-dark w-full '>
          <Layout>
              <div className = "flex items-center justify-between w-full">
                <div className='w-1/2 flex flex-col items-center self-center text-center'>
                  <h2 className='text-bold text-xl'>Network Activity</h2>
                  <p className="my-4 text-base font-medium"> 
                    The sweetest Next.js solution for developers by developers Amuyla, Andrew, Isabelle, and Julia
                  </p>
                </div>
                <div>
                <Image src= {sshot} className='w-1280 h-720'/>
                </div>
              </div>
            </Layout>
          </div>
          <div>
          <Layout>
              <div className = "text-dark flex items-center justify-between w-full">
                <div>
                <Image src= {sshot} className='w-1280 h-720'/>
                </div>
                <div className='w-1/2 flex flex-col items-center self-center text-center'>
                  <h2 className='text-bold text-xl'>Search Engine Optimization</h2>
                  <p className="my-4 text-base font-medium"> 
                    The sweetest Next.js solution for developers by developers Amuyla, Andrew, Isabelle, and Julia
                  </p>
                </div>
              </div>
            </Layout>
          </div>

          <div id="about" className=''>
            <Profile theme={theme} />
          </div>

          <div id="demo">

          </div>
        </div>
        <p className='pb-50'> 
          
        </p>

        <div id="themes" className='sticky bg-base-100 border-t-2 border-black bottom-0'>

          <button
              onClick={(e) => {
                setTheme('lightt')
                upTheme('lightt')
              }}
              data-theme='lightt'
              className='rounded-full bg-white'
              >
                <Image src={lighttheme} className='rounded-full w-10 h-10'/> 
          </button>
          <button
              onClick={(e) => {
                setTheme('darkk')
                upTheme('darkk')
              }}
              data-theme='darkk'
              className='rounded-full m-1 bg-neutral'
          >
              <Image src={darktheme} className='w-10 h-10'/>
          </button>
          <button
              onClick={(e) => {
                setTheme('bee')
                upTheme('bee')
              }}
              data-theme='bee'
              className='rounded-full'
              >
              <Image src={beetheme} className='w-10 h-10'/>
          </button>
          </div>

          <div className='top-0 fixed z-60 w-full bg-primary'>
           <NavBar/>  
        </div>
      </div>
    </>
  )
}
/*

 <header className='flex sticky top-0 z-100'>
            <NavBar />
        </header>
*/
//sticky top-0 bg-secondary py-5 w-full px-32 font-medium flex flex-wrap items-center justify-between