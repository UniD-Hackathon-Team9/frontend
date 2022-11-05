import Link from "next/link";

const Header = () => {
  return (
    <Link href="/">
      <header
        className="bg-white h-14 fixed w-screen border-b-2 border-gray-300 font-bold text-2xl z-50"
        style={{ lineHeight: "3.5rem" }}
      >
        <div className="self-center max-w-lg m-auto pl-5">엠제주세대</div>
      </header>
    </Link>
  );
};

export default Header;
