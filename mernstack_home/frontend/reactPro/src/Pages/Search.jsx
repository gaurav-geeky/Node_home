
import axios from 'axios';
import React from 'react'
import { useState } from 'react'

function Search() {

    let [ok, setOk] = useState("");
    const [databox, setDatabox] = useState([]);   // to get data 

    const handelSubmit = async () => {
        let api = `${import.meta.env.VITE_BACK}/search`;
        const response = await axios.post(api, { newkey: ok }) // sending
        console.log(response.data);
        setDatabox(response.data);
    }

    const ans = databox.map((key) => {
        return (
            <>
                <tr align='center' >
                    <td> {key.name} </td>
                    <td> {key.rollno} </td>
                    <td> {key.city} </td>
                    <td> {key.fees} </td>
                </tr>
            </>
        )
    })

    return (
        <>
            <div style={{ height: "90vh", border: "1px solid black", padding: "20px" }}>

                <h1> Search data here ... </h1>

                enter rollno :
                <input
                    type="text"
                    name='rn'
                    value={ok}
                    onChange={(e) => { setOk(e.target.value) }} />
                <button
                    style={{ border: "1px", backgroundColor: "yellow", color: "red", }}
                    onClick={handelSubmit}>
                    search it
                </button>

                <hr />

                <table border={1} width={600} align='center'>
                    <tr>
                        <th> Name </th>
                        <th> Roll_No </th>
                        <th> City </th>
                        <th> Fees </th>
                    </tr>
                    {ans}
                </table>

            </div>
        </>
    )
}

export default Search


