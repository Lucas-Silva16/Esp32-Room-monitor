
function Navbar() {
    return (
        <div className="navbar sticky top-0 z-50 w-full bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li><a href="#home">Home</a></li>
                        <li><a href="#circuit">Circuit</a></li>
                        <li><a href="#tables">Tables</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a 
                href="#home" 
                className="typing-title text-center text-[20px] font-mono font-bold text-white"
                >
                    ESP32 Room Monitor
                </a>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    )
}


export default Navbar