import HeaderName from "../shared/HeaderName";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <>
     <div className="block lg:hidden">
      <MobileNav />
     </div>
     
     <div className="hidden lg:flex">
       <Sidebar />
     </div>
    </>
  );
};

export default Navbar;