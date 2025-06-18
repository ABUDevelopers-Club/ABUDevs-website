
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Head from 'next/head';
import Hamburger from '../svg-components/hamburger';
import CloseIcon from '../svg-components/CloseIcon';

interface components {
    pageIndex:number,
}

const SubPageHeader:React.FC<components> = ( { pageIndex } ) => {

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
        <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3">
                <ArrowLeft className="h-5 w-5 text-gray-600" />
                <Image
                    src="/images/abudevs-logo.png"
                    alt="ABUDevs Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <div>
                    <h1 className="text-lg font-bold text-green-800">ABUDevs</h1>
                    <p className="text-sm text-gray-600">{pages[pageIndex]?.title}</p>
                </div>
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    { pages.map((page) => (
                        <Link
                            key={page.name}
                            href={page.href}
                            className={`text-sm ${page.active ? 'text-green-700' : 'text-gray-600 hover:text-green-700'} ${page.primary ? 'border-l-[2px] border-l-green-600 text-gray-500 px-6 py-2 font-bold hover:text-green-600' : 'font-medium'}`}
                        >
                            {page.name}
                        </Link>
                    ))}
                </div>

                <div className="md:hidden h-fit w-fit ">
                    <button onClick={toggleMenu} className="flex flex-col justify-center h-fit w-fit">
                        { !isOpen && <Hamburger color={'black'}/> }
                    </button>

                    <div className={`h-[100vh] w-screen bg-black/90 pt-[32px] px-6 fixed top-[0px] left-0 z-40 transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
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
            </div>
            </div>
        </header>
    </>
  );
}

export default SubPageHeader;