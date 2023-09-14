import React from 'react'
import Image from 'next/image'
import Andrew from "../../public/images/profile/Andrew.png"
import Amulya from '../../public/images/profile/Amulya.png'
import Julia from '../../public/images/profile/Julia.png'
import Isabelle from '../../public/images/profile/Isabelle.png'
import nextar from '/Users/isabellero/Desktop/Splash/NextarSplash/public/images/svgs/nextar-logo-black.png'
import { GithubIcon,LinkedInIcon } from './Icon'


const normal = [Andrew,Amulya,Isabelle,Julia]
const bee = [nextar,nextar,nextar,nextar]


const Profile = ({theme}) => {
  //console.log(theme)
  const profilePic = [];

  
  console.log(theme + " in the console for splash")
  if(theme === 'bee'){
    for(let i = 0; i < 4; i++){
      profilePic.push(
        <Image
        src = {bee[i]}
        alt = "bee image"
        />
      )
      console.log("length of array" + bee.length)
      console.log(profilePic[i])
    }
  }else{
    for(let i = 0; i < 4; i++){
      profilePic.push(
        <Image
        src = {normal[i]}
        alt = "normal image"
        />
      )
    }
  }

  return (
    <div className='flex -z-20 items-center justify-center flex-wrap'>
      <div className="card items-center bg-base-100 w-60 h-60 bg-base-100 shadow-xl card-compact mr-4 ring ring-neutral">
            <figure>{profilePic[0]}</figure>
            <div className="card-body">
                <h1 className="card-title text-s">Andrew Lee</h1>
                <div className="card-actions justify-center">
                <a href="https://github.com/anwle115" className="h-30 w-30">
                 <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/andrew-w-lee/" className='h-90 w-90' >
                 <LinkedInIcon className='h-30 w-30'/>
                </a>
                </div>
            </div>
        </div>
        <div className="card items-center w-60 h-60 bg-base-100 shadow-xl card-compact mr-4 ring ring-neutral">
            <figure>{profilePic[1]}</figure>
            <div className="card-body">
                <h1 className="card-title text-s">Amulya Uppala</h1>
                <div className="card-actions justify-center">
                  <a href="https://github.com/amoomoo" className="h-30 w-30">
                  <GithubIcon />
                  </a>
                  <a href="/" className='h-90 w-90' >
                  <LinkedInIcon className='h-30 w-30'/>
                  </a>
                </div>
            </div>
        </div>
        <div className="card items-center w-60 h-60 bg-base-100 shadow-xl card-compact mr-4 ring ring-neutral">
            <figure>{profilePic[2]}</figure>
            <div className="card-body">
                <h1 className="card-title text-s">Isabelle Ro</h1>
                <div className="card-actions justify-center">
                  <a href="https://github.com/isabellero1" className="h-30 w-30">
                  <GithubIcon />
                  </a>
                  <a href="/" className='h-90 w-90' >
                  <LinkedInIcon className='h-30 w-30'/>
                  </a>
                </div>
            </div>
        </div>
        <div className="card items-center w-60 h-60 bg-base-100 shadow-xl card-compact ring ring-neutral">
            <figure>{profilePic[3]}</figure>
            <div className="card-body">
                <h1 className="card-title text-s">Julia Shi</h1>
                <div className="card-actions justify-center">
                  <a href="https://github.com/juliajshi" className="h-30 w-30">
                  <GithubIcon />
                  </a>
                  <a href="https://www.linkedin.com/in/juliacshi/" className='h-90 w-90' >
                  <LinkedInIcon className='h-30 w-30'/>
                  </a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Profile

/*

    */