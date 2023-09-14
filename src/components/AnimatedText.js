import React from 'react'
import {motion} from 'framer-motion'

const ani = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren: 0.05,
        }
    }
}

const aniW = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
        }
    }
}

const AnimatedText = ({text, className =""}) => {
  return (
    <div className='w-full py-2 flex text-center '>
        <motion.h1 className={`w-full text-dark font-bold capitalize text-6xl ${className}`}
        variants = {ani}
        initial="initial"
        animate="animate">
            {
            text.split(" ").map((word,index) =>
            <motion.span key={word+'-'+index} className='inline-block'
            variants = {aniW}>
                {word}&nbsp;
            </motion.span>
            )
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText