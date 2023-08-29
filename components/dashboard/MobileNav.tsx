'use client'

import React, { useState, useRef, useEffect, createElement } from "react";
import { navbarLinks } from "@/constants";
import Link from "next/link";
import { ChevronDownCircle, ChevronUpCircle, X } from "lucide-react";
import { ToggleButton } from "../shared/ToggleButton";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname()
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const handleToggle = (): void => {
    setToggleNav((prev) => !prev);
  };

// Function to determine and format the current path for display
const currentPath = (): string => {
    // Check if the pathname includes '/dashboard/'
    if (pathname.includes('/dashboard/')) {
      // Extract the path portion after '/dashboard/'
      const path = pathname.slice(11);
  
      // Check if the path includes hyphens
      if (path.includes('-')) {
        // Replace hyphens with spaces in the path
        const formattedPath = path.replace(/-/g, ' ');
  
        // Capitalize the first letter of each word in the formatted path
        const capitalizedPath = formattedPath.replace(/\b\w/g, (match) => match.toUpperCase());
  
        // Return the formatted and capitalized path
        return capitalizedPath;
      }
  
      // Return the path as is (without hyphen transformation)
      return path;
    }
  
    // Return 'Dashboard' if the pathname doesn't include '/dashboard/'
    return 'Dashboard';
  }
  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
        setToggleNav(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleNav]);

  return (
    <nav className="w-full flex justify-between bg-secondary dark:bg-dark-secondary items-center p-2 relative">
      <div className="flex">
        <Link href="/" className="font-extrabold font-heading text-2xl">
          <Image src="/logo.svg" alt="logo" width={30} height={30} className="dark:invert" />
        </Link>

        <div className="flex items-center ml-3" onClick={() => handleToggle()}>
          <span className="font-subheading mr-1">{currentPath()}</span>
          {toggleNav ? <ChevronUpCircle /> : <ChevronDownCircle />}
        </div>
      </div>

      {toggleNav && <div className="blur-background"></div>}

      <div className={`${toggleNav ? "flex" : "hidden"} absolute w-full flex-col top-20 left-0 font-base text-lg`}>
        <div className="w-4/5 mx-auto" ref={toggleRef}>
          <div className="flex flex-col items-center text-primary dark:text-primary/80 py-5">
            <X className="flex self-end mb-6 " onClick={() => handleToggle()}/>
            {navbarLinks.map((each) => {
              return (
                <Link href={each.route} className="flex my-3 items-center" key={each.label} onClick={() => handleToggle()}>
                  <span className="mr-2">{each.label}</span>
                  <div>{createElement(each.icon)}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <ToggleButton />
      </div>
    </nav>
  );
};

export default MobileNav;
