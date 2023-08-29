import { navbarLinks } from "@/constants";
import HeaderName from "../shared/HeaderName";
import { createElement } from "react";
import Link from "next/link";
import { ToggleButton } from "../shared/ToggleButton";


const Sidebar = () => {
  return (
    <nav className="sidebar dark:bg-dark-secondary bg-secondary">
      <HeaderName className=""/>

      <div className="flex flex-col w-4/5 justify-center items-center mt-10">
        {navbarLinks.map((each) => {
                return (
                    <Link href={each.route} className="flex my-5 items-center" key={each.label}>
                    <span className="mr-2">{each.label}</span>
                    <div>{createElement(each.icon)}</div>
                    </Link>
                );
                })}
        <div className="flex w-full items-center justify-center mt-10 bg-dark-accent rounded-xl">
            <span className="flex whitespace-nowrap">Theme</span>
           <ToggleButton /> 
        </div>  
      </div>
    </nav>
  );
};

export default Sidebar;