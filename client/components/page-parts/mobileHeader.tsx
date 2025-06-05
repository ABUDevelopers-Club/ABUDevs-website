import React from "react";
import "./MobileHeader.css";
import Image from "next/image";
import Link from "next/link";

const MobileHeader: React.FC = () => {
  return (
    <label className="main w-screen md:hidden h-[70px] pt-[20px] pb-[10px] backdrop-blur-sm absolute flex font-extrabold bg-transparent text-white px-6 z-40 items-center justify-between cursor-pointer">
        <Image
        src="/images/abudevs-logo.png"
        alt="ABUDevs Logo"
        width={50}
        height={50}
        className="rounded-full"
        />
        <input className="inp" type="checkbox" />
        <div className="bar flex flex-col justify-center gap-[3px] h-[100%] w-[60px">
            <span className="top bar-list"></span>
            <span className="middle bar-list"></span>
            <span className="bottom bar-list"></span>
        </div>
        <section className="menu-container flex flex-col gap-2 py-3 pb-[50px] w-[100%] top-[70px] px-[6%] left-0 absolute bg-black/80 backdrop-blur-sm z-50">
            <Link href="/" className="text-green-500 menu-list hover:text-green-900 border-transparent font-light text-[20px]">
                Home
            </Link>
            <Link href="/team" className="text-gray-700 menu-list hover:text-green-500 font-light text-[20px]">
                Team
            </Link>
            <Link href="/events" className="text-gray-700 menu-list hover:text-green-500 font-light text-[20px]">
                Events
            </Link>
            <Link href="/blogs" className="text-gray-700 menu-list hover:text-green-500 font-light text-[20px]">
                Blogs
            </Link>
            <Link href="/about" className="text-gray-700 menu-list hover:text-green-500 font-light text-[20px]">
                About
            </Link>
        </section>
    </label>
  );
};

export default MobileHeader;
