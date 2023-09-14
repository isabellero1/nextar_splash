import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '@/styles/Home.module.css'
import AnimatedText from '@/components/AnimatedText'
import Profile from '@/components/Profile'
import beetheme from 'public/images/svgs/icons8-bee-48.png'
import lighttheme from 'public/images/svgs/icons8-light-mode-78.png'
import darktheme from 'public/images/svgs/icons8-dark-mode-50.png'
import NavBar from '@/components/NavBar'
import { useRouter} from 'next/router'
import Link from 'next/link'
import { LogoIcon } from '@/components/Icon'
import Logoo from 'public/images/svgs/nextar-logo-black.png'
import { theme } from '../../tailwind.config'
import sshot from 'public/images/svgs/spelb.png'
import netact from 'public/images/svgs/Server Side Screen Rec.gif'
import wvit from 'public/images/svgs/Web Vitals Screen Rec.gif'

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
          <div id="top" className='flex bg-accent items-center justify-center text-dark w-full min-h-screen'>
             
                    <div className=' h-45 w-45'>
                    <Image src={Logoo} width={350} height={350}/>
                      <div className=" my-4 text-base font-medium"> 
                        <AnimatedText text="{ Nextar }"/>
                        The sweetest solution for Next.js developers
                      </div>
                    </div>
         
            </div>
        <div id="inner" className='bg-secondary pt-50'>
         
          <div>
            
          </div>

          <AnimatedText text="Features"/>

          <div id="demo" className='flex bg-secondary items-center text-dark w-full '>
          <Layout>
              <div className = "flex items-center justify-between w-full">
                <div className='w-1/2 flex flex-col items-center self-center text-center mx-5'>
                  <h2 className='text-bold text-xl'>Network Activity</h2>
                  <p className="my-4 text-base font-medium"> 
                    Displays all of the requests made from the client side to the server side, displaying the type of request, how long the request takes, and more! Also includes a waterfall visualization of the different requests made
                  </p>
                </div>
                <div>
                <Image src={netact} width= {1280} height={720} />
                </div>
              </div>
            </Layout>
          </div>
          <div>
          <Layout>
              <div className = "text-dark flex items-center justify-between w-full">
                <div>
                <Image src={wvit} width= {1280} height={720} />
                </div>
                <div className='w-1/2 flex flex-col items-center self-center text-center'>
                  <h2 className='text-bold text-xl'>Search Engine Optimization</h2>
                  <p className="my-4 text-base font-medium"> 
                  View your web vital data in real time by endpoint! With Nextar, you can pick and choose which page to observe and view your metrics over time. View your FCP, LCP, FID, CLS in our little dashboard.
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