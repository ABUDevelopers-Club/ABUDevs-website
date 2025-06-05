import Image from "next/image";
import Link from "next/link";


const Header:React.FC = () => {
  return (
      <header className="bg-transparent md:backdrop-blur-0 backdrop-blur-sm md:block hidden absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-row items-center justify-between">
            {/* Logo and Club Name */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/abudevs-logo.png"
                alt="ABUDevs Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-green-500">ABUDevs</h1>
                <p className="text-sm text-white">Ahmadu Bello University Developers Club</p>
              </div>
            </div>

            {/* Navigation Menu - Visible on mobile, hidden on desktop */}
            <button className="md:hidden flex items-center h-[50px] w-[50px] text-white hover:text-green-500 focus:outline-none">
            </button>

            {/* Navigation Menu - Hidden on mobile, visible on desktop */}
            <div className="hidden md:flex flex-grow flex-1 justify-end items-center gap-20">
                <Link href="/" className="text-green-500 hover:text-green-900 font-medium">
                    Home
                </Link>
                <Link href="/team" className="text-white hover:text-green-500">
                    Team
                </Link>
                <Link href="/events" className="text-white hover:text-green-500">
                    Events
                </Link>
                <Link href="/blogs" className="text-white hover:text-green-500">
                    Blogs
                </Link>
                <Link href="/about" className="text-white hover:text-green-500">
                    About
                </Link>
            </div>
          </nav>
        </div>
      </header>
  );
}

export default Header;