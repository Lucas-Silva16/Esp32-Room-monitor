import {useState, useEffect} from "react";

const API_URL ="http://localhost/esp32-room-monitor/api.php";

function Tables() {

    const[TempDados, setTempDados] = useState([])
    const[passagensDados, setPassagensDados] = useState([])

    useEffect(()=>{

    const fetchTemp = () =>{
        fetch(`${API_URL}?tipo=temp`)
        .then(r =>r.json())
        .then(setTempDados);
    };

    const fetchPassagens = ()=>{
        fetch(`${API_URL}?tipo=passagens`)
        .then(r=>r.json())
        .then(setPassagensDados)
    };

    fetchTemp();
    fetchPassagens();

    const IntervaloTemp = setInterval(fetchTemp, 30000);
    const IntervaloPassagens = setInterval(fetchPassagens, 5000);

    return () => {
        clearInterval(IntervaloTemp);
        clearInterval(IntervaloPassagens);
    };
},[]);


    return (
        <section id="tables">
        <div>
            <h1 className="text-[25px] font-mono font-bold text-center mb-2 text-white">
                Temperature and Humidity
            </h1>
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse font-mono font-bold">
                    <thead>
                        <tr className="border-b border-gray-700 text-white">
                            <th>#</th>
                            <th>Temp</th>
                            <th>Humidity</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody  className="divide-y divide-gray-800">
                    {TempDados.map((row) => (
                    <tr key={row.ID}>
                        <td>{row.ID}</td>
                        <td>{row.temperatura} C</td>
                        <td>{row.humidade} %</td>
                        <td>{row.data_leitura}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>

                <h1 className="text-[25px] font-mono font-bold text-center mb-2 text-white"> 
                </h1>
                <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse font-mono font-bold">
                    <thead>
                        <tr className="border-b border-gray-700 text-white">
                            <th>#</th>
                            <th>Distance</th>
                            <th>Date and Hour</th>
                        </tr>
                    </thead>
                        <tbody  className="divide-y divide-gray-800">
                    {passagensDados.map((row) => (
                    <tr key={row.ID}>
                        <td>{row.ID}</td>
                        <td>{row.distancia} cm</td>
                        <td>{row.data_leitura}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        </section>
    ); 
}

export default Tables;