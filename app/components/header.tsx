"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [mobileSubMenu, setMobileSubMenu] = useState('');
    const handleMenu = () => {
        setMobileMenu(false);
        setMobileSubMenu('');
    };
    // use effect for smooth scroll to sections
    useEffect(() => {
        const handleHashChange = () => {
            const id = window.location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setMobileMenu(false);
            setMobileSubMenu('');
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);


    return (
        <header
            className='absolute z-10   w-full h-[100px] flex items-center border-b border-white/50 overflow-hidden'
            id='menu'
        >
            <div className="relative global-container flex justify-between items-center w-full ">
                <Link href="/" ><p  id="logo" className="text-xl">HAWAII BARBER KEMPTEN</p></Link>
                <div
                    onClick={handleMenu}
                    className={`menu-overlay ${mobileMenu && 'active'}`}
                />
                <nav
                    className={`menu-block ${mobileMenu && 'active'}`}

                >
                    <ul className="site-menu-main">
                        <Link href="/" ><li>Startseit</li></Link>
                        <Link href="#about" ><li>­Über uns</li></Link>
                        <Link href="#price-menu    " ><li>Preise</li></Link>
                        <Link href="#footer" ><li>Kontakt</li></Link>
                        <li>
                            <div className={`mobile-menu-head ${mobileSubMenu && 'active'}`}>
                                <div onClick={handleMenu} className='mobile-menu-close rotate-[-90deg]'>
                                    &#10095;
                                </div>
                            </div>
                        </li>

                    </ul>
                </nav>
                <div className={`mobile-menu-head ${mobileSubMenu && 'active'}`}>
                    <div onClick={handleMenu} className='mobile-menu-close rotate-[-90deg]'>
                        &#10095;
                    </div>
                </div>
                <div className='block lg:hidden'>
                    <button
                        onClick={() => setMobileMenu(true)}
                        className={`mobile-menu-trigger `}
                    >
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
