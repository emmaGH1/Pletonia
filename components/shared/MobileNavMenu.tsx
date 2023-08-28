'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { ToggleButton } from "./ToggleButton";
import { navbarLinks } from "@/constants";
import Link from "next/link";
import { createElement } from "react";



const MobileNavMenu = () => {
  return (
    <div className="flex w-[95%] justify-between mx-auto mt-3">
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className="relative">
                <NavigationMenuTrigger 
                 style={{backgroundColor: 'Background'}}>
                    Dashboard
                </NavigationMenuTrigger>
                    <NavigationMenuContent>
                            {navbarLinks.map((link) => {
                                const { icon, route, label  } = link
                                return (
                                    <Link key={route} href={route} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                       <p className="mr-1">{label}</p>
                                       {/* <div>
                                         {createElement(icon)}
                                       </div> */}
                                    </NavigationMenuLink>
                                  </Link>
                                )
                            })}
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        <ToggleButton />
    </div>
  );
};

export default MobileNavMenu;