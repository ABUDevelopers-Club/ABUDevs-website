import React from "react";

interface HamburgerProps {
    color?: string; 
}

const Hamburger:React.FC<HamburgerProps> = ( { color }) => {
    return (
        <svg fill={color?color:'#ffffff'} width="30px" height="30px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z" fillRule="evenodd"></path> 
            </g>
        </svg>
    )
}

export default Hamburger;