import TextArea from "../Components/TextArea.jsx"
import img from "../assets/imagem1.jpg"

function Home() {
    return (
        <section id="home" className="min-h-screen px-6 py-10 scroll-mt-24">
            <div className="w-full space-y-6">
            <TextArea title="Why this project?">
                <p>
                    This project began when I wanted to monitor the temperature and humidity
                    in my room, along with tracking traffic through the door. Since summers
                    in Madeira Island can be quite intense, I wanted to visualize how these
                    conditions fluctuate throughout the day and observe the effectiveness of
                    using a fan to cool the space.
                </p>
            </TextArea>

            <div>
            <TextArea title="Why do it?" className="space-y-3">
                <p>
                    I decided to take on this project to challenge myself and strengthen my
                    full-stack development skills covering the frontend, backend, databases,
                    and hardware integration with microcontrollers. Even though this is a
                    personal project rather than a graded assignment, I am treating it with
                    professional rigor to refine my architecture skills and gain practical
                    experience that will benefit my future career.
                </p>
            </TextArea>
            <div className="rounded-xl w-[500px] h-auto translate-x-123 translate-y-7 overflow-hidden">
            <img src={img} alt="Project Image" className="w-full h-full object-cover" />
            </div>
            </div>
            </div>
        </section>
    );
}

export default Home