"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function ToggleMenu() {

    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <div
            onClick={toggleDarkMode}
            className="flex justify-center items-center size-[44px] bg-[#0f0e474d] rounded-full ml-auto border border-gray-50/20 mb-4 backdrop-blur-2xl md:hidden">
            <Image src={"/svg/hamburger-menu.svg"} alt="menu" width={24} height={24} />
        </div>
    )
}
