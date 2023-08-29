
import Image from "next/image";
import Link from "next/link";

const HeaderName = () => {
  return (
    <Link className="flex items-center" href='/' >
    <div className="dark:shadow-inner">
      <Image src="/logo.svg" alt='logo' width={30} height={30} className="hidden md:block dark:invert"/>
    </div>
    <h1 className="text-3xl ml-2 font-bold">Pletonia</h1>
  </Link>
  );
};

export default HeaderName;