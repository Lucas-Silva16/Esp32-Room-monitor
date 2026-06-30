import TextArea from "../Components/TextArea.jsx"
import img from "../assets/cir.jpg"
import img1 from "../assets/cir2.jpg"
function Circuit(){
        return (
            <section id="circuit" className="min-h-screen px-6 py-10 scroll-mt-24 border-t border-white/10">
                <div className="w-full">
                    <TextArea title="Circuit" >
                        <p>
                            The project uses sensors to collect movement as soon it is registered it is sent to the DB,
                            temperature and humidity data every
                            10 minutes, building a comprehensive dataset over time. This data is
                            transmitted from an ESP32 to a backend server, which then logs it into a
                            database. Finally, the frontend fetches this information and presents it
                            in a user friendly interface, allowing me to easily track the
                            environmental conditions of my room.
                        </p>
                    </TextArea>
                </div>
                <div>
                <figure className="hover-gallery max-w-80 translate-x-145 translate-y-10">
                <img src={img} />
                <img src={img1} />

                </figure>
                </div>
            </section>
            
    );
}

export default Circuit;