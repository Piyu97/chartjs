import React, { useState, useEffect } from "react"
import _ from 'lodash';
import Line from "./Line"
import Bar from "./Bar"
import Navbar from "./Navbar"

function Table() {
    const perPage = 10
    const [prod, setDb] = useState([])
    const [activePage, setActivePage] = useState(1)
    const [orderCount, setCount] = useState({})
    const [priceCount, setPrice] = useState({})
    const [totalPages, setTotal] = useState(0)
    
    const ele = (<ul className="float-right">
        <li onClick={() => setActivePage(activePage - 1)} className="page-item list-inline-item border border-danger p-2">Previous</li>
        <li className="page-item list-inline-item border border-success p-2">{activePage}</li>
        <li onClick={() => setActivePage(activePage + 1)} className="page-item list-inline-item border border-danger p-2">Next</li>
    </ul>);

    useEffect(() =>
        data(), []
    )

    function data() {
        fetch("https://raw.githubusercontent.com/anadahalli/interview/master/db.json")
            .then(res => res.json())
            .then(res => {

                const newArr = res.customers.map((item, i) => {
                    item["date"] = item["created"].split("T")[0]
                    return item
                })

                const orderArr = res.orders.map((item, i) => {
                    item["date"] = item["created"].split("T")[0].split("-")[2]
                    return item
                })

                let key, obj = {}, priceObj = {}
                orderArr.sort((a, b) => b["date"] < a["date"] ? 1 : -1)
                .forEach((item, i) => priceObj[Number(item.date)] = (priceObj[Number(item.date)] === undefined ? 0 : priceObj[Number(item.date)] + Number(item.price)))
               
                const groups = _.groupBy(newArr.sort((a, b) => b["date"] < a["date"] ? 1 : -1), 'date');
                for (key in groups) {
                    var date = Number(key.split("-")[2])
                    obj[date] = groups[key].length
                }

                setDb(newArr)
                setCount(obj)
                setPrice(priceObj)
                setTotal(newArr.length / perPage)
            })
    }

    return (
        <React.Fragment>
            <Navbar></Navbar>
            {Object.keys(orderCount).length >= 1 && <Line data={orderCount}></Line>}
            {Object.keys(priceCount).length >= 1 && <Bar data={priceCount}></Bar>}

            <div className="table-responsive mt-5">
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>SI.NO</td>
                            <td>Email</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Created Date</td>
                            <td>Orders</td>
                        </tr>
                    </thead>
                    <tbody>
                        {prod && prod.filter((item, i) => i >= perPage * (activePage - 1) && i <= perPage * (activePage)).map((item, idx) =>
                            <tr key={item.id}>
                                <td>{idx}</td>
                                <td>{item.email}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.date}</td>
                                <td>{item.orders}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {ele}
        </React.Fragment>
    )
}
export default Table
