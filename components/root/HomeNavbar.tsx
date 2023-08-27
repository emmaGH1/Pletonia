import { Button } from "@/components/ui/button"
import Image from "next/image"
import { UserCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

const HomeNavbar = () => {
  const buttonOutlined = `
  whitespace-nowrap
  border border-black
  dark:border-slate-100
  hover:text-accent
  hover:bg-dark-primary
  hover:dark:bg-primary 
  hover:dark:text-accent
   mr-5`

  const button = `
    whitespace-nowrap
    hover:text-accent 
    hover:bg-primary
    hover:dark:bg-dark-primary 
    hover:dark:text-dark-accent 
    bg-dark-primary 
    dark:bg-primary 
    text-primary 
    dark:text-dark-primary hover:border 
    border-black
  `
  return (
    <>
      <div className="flex justify-between mx-auto w-9/10 mt-5 ">

        <div className="flex items-center">
          <Image src='/logo.svg' alt='logo' width={30} height={30} />
          <h1 className="text-3xl ml-2 font-bold ">Pletonia</h1>
        </div>
        
        {/* For desktop devices */}
        <div className="hidden lg:flex">
          <Button 
            className={buttonOutlined}
           >
            Sign In
          </Button>
          <Button className={button}>
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
                  <Link href="/login">
                    Sign In
                  </Link>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button asChild className={`${button}`} size='lg'>
                  <Link href="/login">
                    Sign Up
                  </Link>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default HomeNavbar;