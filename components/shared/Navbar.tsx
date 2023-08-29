import HeaderName from "./HeaderName";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  return (
    <div>

        <div>
          <div className="hidden lg:flex">
            <HeaderName />
          </div>
           
          <div className="lg:hidden">
           <MobileNavMenu />
          </div>
        </div>
        
        <div>

        </div>
    </div>
  );
};

export default Navbar;