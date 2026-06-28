import TextArea from "../Components/TextArea.jsx"


function Circuit(){
        return (
            <section id="circuit" className="min-h-screen px-6 py-10 scroll-mt-24 border-t border-white/10">
                <div className="w-full">
                    <TextArea title="Circuit" >
                        <p>
                            The project uses sensors to collect temperature and humidity data every
                            15 minutes, building a comprehensive dataset over time. This data is
                            transmitted from an ESP32 to a backend server, which then logs it into a
                            database. Finally, the frontend fetches this information and presents it
                            in a user-friendly interface, allowing me to easily track the
                            environmental conditions of my room.
                        </p>
                    </TextArea>
                </div>
            </section>
    );
}

export default Circuit;