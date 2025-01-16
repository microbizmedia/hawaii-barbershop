


const Header = () => {

    return (
        <header
            className='absolute z-10   w-full h-[100px] flex items-center border-b border-white/50 overflow-hidden'
            id='menu'
        >
            <div className="relative global-container flex justify-between items-center w-full ">
            <p id="logo" className="text-xl">HAWAII BARBER KEMPTEN</p>
            <nav>
                <ul className="flex gap-6">
                    <li>Startseit</li>
                    <li>­Über uns </li>
                    <li>Preise</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
            </div>
        </header>
    );
};

export default Header;
