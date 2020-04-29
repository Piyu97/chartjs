import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

function LineChart(props) {
    const [db, setDb] = useState(props.data)
    const chartData = {
        labels: Object.keys(db),
        datasets: [
            {
                label: "Orders",
                data: Object.values(db),
                backgroundColor: "lightblue",
                borderWidth: 1,
                borderColor: "#777",
                pointBorderWidth:1,
                pointBackgroundColor:'red',
                pointRadius:4,
            }
        ],
    }
    return (
        <div className="char mx-5 ">
            <Line
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: 'Graph on Order Date',
                        fontSize: 25
                    },
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Order on a single day',
                                fontSize: 15
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Date',
                                fontSize: 15
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}


export default LineChart;