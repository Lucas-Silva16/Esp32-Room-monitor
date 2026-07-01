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
            <h1 className="text-[25px] font-mono font-bold text-center mb-5 text-white">
                Temperature and Humidity
            </h1>
            <div className="w-full overflow-x-auto">
            <table className="w-full text-left divide-x divide-gray-700 font-mono font-bold border border-gray-700">
                <thead>
                    <tr className="border-b border-gray-700 text-white">
                        <th className="px-3 py-2 text-center border-x border-gray-700">ID</th>
                        <th className="px-3 py-2 text-center border-x border-gray-700">Temp</th>
                        <th className="px-3 py-2 text-center border-x border-gray-700">Humidity</th>
                        <th className="px-3 py-2 text-center border-x border-gray-700">Time</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                {TempDados.map((row) => (
                <tr key={row.ID} className="divide-x divide-gray-700">
                    <td className="px-3 py-2 text-center border-x border-gray-800">{row.ID}</td>
                    <td className="px-3 py-2 text-center border-x border-gray-800">{row.temperatura} C</td>
                    <td className="px-3 py-2 text-center border-x border-gray-800">{row.humidade} %</td>
                    <td className="px-3 py-2 text-center border-x border-gray-800">{row.data_leitura}</td>
                </tr>
                ))}
                </tbody>
            </table>

            <h1 className="text-[25px] font-mono font-bold text-center mb-4 mt-5 text-white">
                Passagens
            </h1>

            <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse font-mono font-bold border border-gray-700">
                <thead>
                    <tr className="border-b border-gray-700 text-white">
                        <th className="px-3 py-2 text-center border-x border-gray-700">#</th>
                        <th className="px-3 py-2 text-center border-x border-gray-700">Distance</th>
                        <th className="px-3 py-2 text-center border-x border-gray-700">Date and Hour</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                {passagensDados.map((row) => (
                <tr key={row.ID} className="divide-x divide-gray-800">
                    <td className="px-3 py-2 text-center border-x border-gray-800">{row.ID}</td>
                    <td className="px-3 py-2 text-center border-x border-gray-800">{row.distancia} cm</td>
                    <td className="px-3 py-2 text-center border-x border-gray-800">{row.data_leitura}</td>
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