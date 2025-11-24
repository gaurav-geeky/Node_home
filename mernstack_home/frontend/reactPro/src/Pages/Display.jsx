import axios from 'axios';
import { useEffect, useState } from 'react'

function Display() {

    let [mydata, setMydata] = useState([]);

    const getData = async () => {
        let api = `${import.meta.env.VITE_BACK}/display`;  // th. backend link
        let response = await axios.get(api); // getting res from back 
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(() => {
        getData();
    }, []);

    const ans = mydata.map((key) =>
    (
        <>
            <tr align="center" bgcolor='lightyellow' style={{ color: "blue" }}>
                <td> {key.name} </td>
                <td> {key.rollno} </td>
                <td> {key.city} </td>
                <td> {key.fees} </td>
            </tr>
        </>
    )
    )

    return (
        <>

            <div style={{ height: "90vh", border: "1px solid black" }}>

                <h1> Display all data here </h1>
                <table border={1} width={700} align='center' style={{ margin: "20px auto", }} >
                    <tr>
                        <th>Name</th>
                        <th>Roll no. </th>
                        <th>City</th>
                        <th>FEES</th>
                    </tr>
                    {ans}
                </table>

            </div>
        </>
    )
}

export default Display

