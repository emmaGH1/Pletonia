'use client'

import Link from "next/link";
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'

import { Button } from "../ui/button";
import { HeaderAnimationVariant } from "@/lib/motion";
import { FallbackText } from "../FallbackText";

const HomeContent = () => {
  const textContent = 'Welcome to Pletonia 🚀🌟'
  const textContent2 = 'Your Journey to Success Starts Here. Track, Discover, Excel.'

  const animateText = (text: string, delayY: number) => {
    return (
        Array.from(text).map((letter, index) => (
        <motion.span
          key={index}
          variants={HeaderAnimationVariant(index, delayY)}
          initial="hidden"
          animate="show"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
     )))
  }
  
  return (
    <div className="flex flex-col items-center min-h-screen px-4 mt-20">
      <div className="text-center mb-8">
        <div className="text-2xl md:text-4xl font-bold mb-4">
             <FallbackText content={animateText(textContent, 0.001)} fallbacktext={textContent} />
        </div>
        <p 
         className="
           text-base md:text-lg text-gray-600
            md:flex-nowrap md:mx-0 md:w-full
          dark:text-gray-400 flex flex-wrap
            w-4/5 mx-auto 
          ">
             <FallbackText content={animateText(textContent2, 0.001)} fallbacktext={textContent2} />
        </p>
      </div>
      <div className="border border-dark-primary p-3">
        <p className="text-base md:text-lg text-gray-800 dark:text-gray-500">
          Effortlessly manage job applications, track progress, and gain insights into your career path.
          Let Pletonia guide you to your dream job! 🌠
        </p>
      </div>
      <Button asChild variant='destructive' className="mt-14 md:mt-8 bg-dark-primary text-white px-6 py-3 rounded-md shadow-lg hover:text-dark-accent transition duration-200" >
        <Link href='/sign-up'>Get Started</Link>
      </Button>
      <footer className="mt-12 md:mt-16 flex items-center justify-center text-dark-primary dark:text-secondary space-x-4 md:space-x-6">
        <Link href="https://github.com/emmaGH1" target="_blank">
          <BsGithub className="text-xl hover:text-dark-accent transition-colors" />
        </Link>
        <Link href="https://www.linkedin.com/in/emmaGH1" target='_blank'>
           <BsLinkedin className="text-xl hover:text-dark-accent transition-colors" />
        </Link>
        <Link href="https://twitter.com/emmadotdev" target="_blank">
           <BsTwitter className="text-xl hover:text-dark-accent transition-colors" />
        </Link>
      </footer>
      <p className="mt-4 text-sm md:text-base text-gray-500 dark:text-gray-400">
        Copyright © 2023 Pletonia
      </p>
    </div>
  );
};

export default HomeContent;
