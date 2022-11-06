import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Link href="/">
      <header
        className="bg-white flex items-center justify-center h-14 fixed w-screen border-b-2 border-gray-300 font-bold text-2xl z-50"
        style={{ lineHeight: "3.5rem" }}
      >
        <Image
        src={"/img/logo.png"}
        alt="logo"
        width={115}
        height={40}
        />
      </header>
    </Link>
  );
};

export default Header;
