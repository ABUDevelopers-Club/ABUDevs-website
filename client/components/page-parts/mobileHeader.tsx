"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "../svg-components/hamburger";
import CloseIcon from "../svg-components/CloseIcon";
import Head from "next/head";

interface components {
    pageIndex: number;
};

const MobileHeader: React.FC<components> = ({ pageIndex }) => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const toggleMenu = () => {  
        setIsOpen(!isOpen) ;
        console.log("Menu toggled:", !isOpen);
    };

    const pages = [
        { name: 'Home', href: '/', active: 0 === pageIndex ? true:false, title: 'Home', description: 'Welcome to ABUDevs, the Ahmadu Bello University Developers Club', image: '/images/abudevs-logo.png' },  
        { name: 'Team', href: '/team', active: 1 === pageIndex ? true:false, title: 'Our Team', description: 'Meet the team behind ABUDevs', image: '/images/team.jpg' }, 
        { name: 'Events', href: '/events', active: 2 === pageIndex ? true:false, title: 'Events', description: 'Join us for exciting events and workshops', image: '/images/events.jpg' },
        { name: 'Blogs', href: '/blogs', active: 3 === pageIndex ? true:false, title: 'Blogs', description: 'Read our latest blogs and articles', image: '/images/blogs.jpg' },
        { name: 'About', href: '/about', active: 4 === pageIndex ? true:false, title: 'About', description: 'Learn more about ABUDevs', image: '/images/about.jpg' },
        { name: 'Join Us', href: '/register', primary: true, title: 'Join Us', description: 'Become a part of ABUDevs', image: '/images/join.jpg' }
    ];

    const page = pages[pageIndex] || { title: "ABUDevs", description: "Ahmadu Bello University Developers Club", image: "/images/abudevs-logo.png" };

    return (
        <>
            <Head>
                <title>{page.title}</title>
                <meta name="description" content={page.description} />
                {/* Open Graph tags for social media/link previews */}
                <meta property="og:title" content={page.title} />
                <meta property="og:description" content={page.description} />
                <meta property="og:image" content={page.image} />
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={page.title} />
                <meta name="twitter:description" content={page.description} />
                <meta name="twitter:image" content={page.image} />
            </Head>
            <div className="main w-screen md:hidden h-[70px] pt-[20px] pb-[10px] backdrop-blur-sm absolute flex font-extrabold bg-transparent text-white px-6 z-50 items-center justify-between cursor-pointer">
                <Image
                src="/images/abudevs-logo.png"
                alt="ABUDevs Logo"
                width={50}
                height={50}
                className="rounded-full"
                />
                <button onClick={toggleMenu} className="flex flex-col justify-center h-fit w-fit">
                    { !isOpen && <Hamburger/> }
                </button>

                <div className={`h-[100vh] w-screen bg-black/90 pt-[32px] px-6 absolute top-[0px] left-0 z-40 transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
                    <div className="flex flex-row w-full h-fit items-center justify-end">
                        <button onClick={toggleMenu} className="flex flex-col justify-center h-fit w-fit">
                            <CloseIcon/>
                        </button>
                    </div>
                    <div className="flex flex-col w-[inherit] gap-2 items-start justify-start mt-6 pl-2">
                        { pages.map((page) => (
                            <Link key={page.name} href={page.href} className={`h-fit w-fit`} >
                                <div className={`w-[200px] font-light mb-4 block ${page.active ? 'text-green-500 border-b-[1px] border-b-green-500' : 'text-white hover:text-green-500'} ${page.primary ? 'border-t-[1px] border-gray-400 text-gray-300 pt-6 mt-6 text-[16px] hover:text-green-600' : 'text-lg'}`}>
                                    {page.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileHeader;
