"use client"
import { useState, useEffect } from "react";


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
                <a href="/" ><p  id="logo" className="text-xl">HAWAII BARBER KEMPTEN</p></a>
                <div
                    onClick={handleMenu}
                    className={`menu-overlay ${mobileMenu && 'active'}`}
                />
                <nav
                    className={`menu-block ${mobileMenu && 'active'}`}

                >
                    <ul className="site-menu-main">
                        <a href="/" ><li>Startseit</li></a>
                        <a href="#about" ><li>­Über uns</li></a>
                        <a href="#price-menu    " ><li>Preise</li></a>
                        <a href="#footer" ><li>Kontakt</li></a>
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
