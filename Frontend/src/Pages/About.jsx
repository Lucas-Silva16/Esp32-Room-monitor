function About() {
    return (
        <div>
            <h1 className="text-[25px] text-center font-bold mt-6 mb-6">Why this project?</h1>
            <p className="text-justify ">
                This project began when I wanted to monitor the temperature and humidity 
                in my room, along with tracking traffic through the door. 
                Since summers in Madeira Island can be quite intense, I wanted to visualize 
                how these conditions fluctuate throughout the day and observe the 
                effectiveness of using a fan to cool the space.
            </p>

            <h1 className="text-[25px] text-center font-bold mt-6 mb-6">Why do it?</h1>
            <p>
                I decided to take on this project to challenge myself and strengthen 
                my full-stack development skills covering the frontend, backend, 
                databases, and hardware integration with microcontrollers. 
                Even though this is a personal project rather than a graded assignment, 
                I am treating it with professional rigor to refine my architecture 
                skills and gain practical experience that will benefit my future career.
            </p>

            <h1 className="text-[25px] text-center font-bold mt-6 mb-6">How it works</h1>
            <p>
                The project uses sensors to collect temperature and humidity data every 
                15 minutes, building a comprehensive dataset over time. This data is 
                transmitted from an ESP32 to a backend server, which then logs it into 
                a database. Finally, the frontend fetches this information and presents 
                it in a user-friendly interface, allowing me to easily track the 
                environmental conditions of my room.
            </p>
        </div>
    );
}

export default About;