import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Link href="/">
      <header
        className="bg-white h-14 fixed w-screen border-b-2 border-gray-300 font-bold text-2xl z-50"
        style={{ lineHeight: "3.5rem" }}
      >
        <div
          className="self-center h-full relative mb-6 cursor-pointer"
        >
          <Image
            src={"/img/logo.png"}
            alt="logo"
            layout="fill"
            objectFit="scale-down"
          />
        </div>
      </header>
    </Link>
  );
};

export default Header;
