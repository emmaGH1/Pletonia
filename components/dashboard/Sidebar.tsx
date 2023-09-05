'use client'

import { navbarLinks } from "@/constants";
import HeaderName from "../shared/HeaderName";
import { createElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ToggleButton } from "../shared/ToggleButton";


const Sidebar = () => {
  const pathname = usePathname()

  return (
    <nav className="sidebar dark:bg-dark-secondary bg-secondary">
      <HeaderName className=""/>

      <div className="flex flex-col w-4/5 justify-center items-center mt-10">
        {navbarLinks.map((each) => {
                return (
                    <Link href={each.route} className={`flex my-5 items-center hover:text-dark-accent dark:hover:text-dark-accent transition-colors duration-200 ${each.route === pathname ? '' : ' text-dark-primary/60 dark:text-primary/60'}`} key={each.label} 
                    >
                    <span className="mr-2">{each.label}</span>
                    <div>{createElement(each.icon)}</div>
                    </Link>
                );
        })}

        <ToggleButton className="flex w-full items-center justify-center mt-10 bg-dark-accent rounded-xl text-white"/> 
      
      </div>
    </nav>
  );
};

export default Sidebar;