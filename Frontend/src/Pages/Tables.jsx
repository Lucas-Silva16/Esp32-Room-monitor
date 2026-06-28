function Tables() {

    return (
        <section id="tables">
        <div>
            <h1 className="text-[25px] font-mono font-bold text-center mb-2 text-white">
                Data Tables
            </h1>
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse font-mono font-bold">
                    <thead>
                        <tr className="border-b border-gray-700 text-white">
                            <th>Temp</th>
                            <th>Humidity</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody  className="divide-y divide-gray-800">
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
        </section>
    ); 
}

export default Tables;