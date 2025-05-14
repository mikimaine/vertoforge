'use client';

import { Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaUncharted } from 'react-icons/fa';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2';

import { menuItems } from '@/data/menuItems';
import { siteDetails } from '@/data/siteDetails';
import Container from './Container';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">

                        <FaUncharted className="text-foreground min-w-fit w-7 h-7" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                            <defs>
                                <linearGradient id="vf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#00A3FF" />
                                    <stop offset="100%" stop-color="#9B34FA" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M40,20 L60,20 L100,120 L140,20 L160,20 L100,180 Z"
                                fill="url(#vf-grad)"
                            />
                            <path d="M110,80 C120,60 140, fifty 150,65" fill="none" stroke="url(#vf-grad)" stroke-width="8" stroke-linecap="round" />
                            <path d="M115,90 C125,70 145,60 155,75" fill="none" stroke="url(#vf-grad)" stroke-width="8" stroke-linecap="round" />
                            <path d="M120,100 C130,80 150,70 160,85" fill="none" stroke="url(#vf-grad)" stroke-width="8" stroke-linecap="round" />
                            <circle cx="150" cy="65" r="7" fill="url(#vf-grad)" />
                            <circle cx="155" cy="75" r="7" fill="url(#vf-grad)" />
                            <circle cx="160" cy="85" r="7" fill="url(#vf-grad)" />
                        </svg>
                        <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#cta" className="text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors">
                                Comming Soon
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#cta" className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit" onClick={toggleMenu}>
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
