import Esp32 from "../assets/esp32.svg"

function Rodape() {
    return (
        <footer className="footer sm:footer-horizontal w-full bg-neutral text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
                <img src={Esp32} alt="ESP32 Logo" className="h-9 w-9 object-contain" />
                <p>Copyright {new Date().getFullYear()} - All rights reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end md:ml-auto">

            </nav>
        </footer>
    )
}

export default Rodape