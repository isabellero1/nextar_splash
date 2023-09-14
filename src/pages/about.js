import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Profile from '@/components/Profile'
import Andrew from "../../public/images/profile/Andrew.png"
import Amulya from '../../public/images/profile/Amulya.png'
import Julia from '../../public/images/profile/Julia.png'
import Isabelle from '../../public/images/profile/Isabelle.png'
import Image from 'next/image'
import Link from 'next/link'

const imageStore = [Andrew,Amulya,Julia,Isabelle]

const about = () => {

  //const values = Object.values(Andrew);

  for (const val of Object.values(Andrew)) {
      console.log("Andrew Properties: " + val);
  }

  return (
    <>
        <Head>
            <title>Nextar | About Us</title>
            <meta name="description" content="desc"></meta>
        </Head>
        <main className='flex w-full flex-col items-center '> 
            <AnimatedText text="About the Team" />
              <div className='flex justify-center flex-wrap'>
                <Profile />
              </div>
        </main>
    </>
  )
}

export default about