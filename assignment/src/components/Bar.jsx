import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

function LineChart(props) {
    const db = props.data
    const chartData = {
        labels: Object.keys(db),
        datasets: [
            {
                label: "Prices",
                data: Object.values(db),
                backgroundColor: "lightblue",
                borderWidth: 1.5,
                borderColor: "#777",

            }
        ]
    }
    return (
        <div className="chart mx-5">
            <Bar
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: ' Graph on Price Date',
                        fontSize: 25
                    },
                    tooltips: {
                        mode: 'point'
                    },
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Price on a single day',
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