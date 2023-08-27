'use client'

import Link from "next/link";
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { HeaderAnimationVariant } from "@/lib/motion";

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
          whileInView="show"
          
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
     )))
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="text-center mb-8">
      <div className="text-4xl font-bold mb-2 flex">
            {animateText(textContent, 0.01)}
        </div>
      <p className="text-lg text-gray-600 dark:text-gray-400">
            {animateText(textContent2, 0.05)}
      </p>
    </div>
    <div className="border border-dark-primary p-3">
      <p className="text-lg text-gray-800 dark:text-gray-100">
        Effortlessly manage job applications, track progress, and gain insights into your career path.
        Let Pletonia guide you to your dream job! 🌠
      </p>
    </div>
    <button className="mt-8 bg-dark-primary text-white px-6 py-3 rounded-md shadow-lg hover:bg-primary hover:text-dark-primary border hover:border-dark-primary border-dark-primary transition-colors">
      Get Started
    </button>
    <footer className="mt-16 flex items-center justify-center text-dark-primary dark:text-secondary space-x-6">
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

    <p className="mt-4 text-gray-500 dark:text-gray-400">Copyright © 2023 Pletonia</p>
  </div>

  );
};

export default HomeContent;