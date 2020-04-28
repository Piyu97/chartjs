import React,{useState,useEffect} from "react"

function Table() {

    const [prod,setDb]=useState([])
    const [perPage,setPerPage]=useState(10)
    const [activePage,setActivePage]=useState(1)
    useEffect(()=>
        data(),[]
    )
    function data(){
        fetch("https://raw.githubusercontent.com/anadahalli/interview/master/db.json")
        .then(res=>res.json())
        .then(res=>{
            setDb(res.customers)
        }) 
    }

    return (
        <div className="table-responsive mt-5">
            <table className="table  table-bordered ">
                <thead className="bg-dark text-white">
                    <tr>
                        <td>SI.NO</td>
                        <td>Email</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Created</td>
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
                            <td>{item.created}</td>
                            <td>{item.orders}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )

}
export default Table
