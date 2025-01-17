"use client"
import { useState } from "react";


const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [mobileSubMenu, setMobileSubMenu] = useState('');
    const handleMenu = () => {
        setMobileMenu(false);
        setMobileSubMenu('');
    };
    return (
        <header
            className='absolute z-10   w-full h-[100px] flex items-center border-b border-white/50 overflow-hidden'
            id='menu'
        >
            <div className="relative global-container flex justify-between items-center w-full ">
                <p id="logo" className="text-xl">HAWAII BARBER KEMPTEN</p>
                <div
                    onClick={handleMenu}
                    className={`menu-overlay ${mobileMenu && 'active'}`}
                />
                <nav
                    className={`menu-block ${mobileMenu && 'active'}`}

                >
                    <ul className="site-menu-main">
                        <li>Startseit</li>
                        <li>­Über uns </li>
                        <li>Preise</li>
                        <li>Kontakt</li>
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
