'use client'

import { Button } from "@/components/ui/button"
import { UserCircle } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ToggleButton } from "../shared/ToggleButton";
import { button, buttonOutlined } from "@/app/styles/globalStyles";
import HeaderName from "../shared/HeaderName";


const HomeNavbar = () => {

  return (
    <>
      <div className="flex justify-between mx-auto w-9/10 mt-5 ">

        <div>
          <HeaderName />
        </div>
        
        <div className="flex items-center">

        {/* Toggle Mode Button */}
        <div className="mr-2 md:mr-5">
          <ToggleButton />
        </div>
        
        {/* For desktop devices */}
        <div className="hidden lg:flex justify-between">
          <Button 
            className={button}
           >
            Sign In
          </Button>
          <Button className={buttonOutlined}>
            Sign Up
          </Button>
        </div>
        
        {/* For mobile devices */}
        <div className="lg:hidden relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <UserCircle className="w-10 h-10"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute right-0 flex">
              <DropdownMenuItem>
                <Button asChild className={`${buttonOutlined}`} size='lg'>
                  <Link href="/sign-up">
                    Sign In
                  </Link>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button asChild className={`${button}`} size='lg'>
                  <Link href="/sign-in">
                    Sign Up
                  </Link>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        </div>
      </div>
    </>
  );
};

export default HomeNavbar;