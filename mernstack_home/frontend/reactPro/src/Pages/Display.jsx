import axios from 'axios';
import { useEffect, useState } from 'react'

function Display() {

    let [mydata, setMydata] = useState([]);

    const getData = async () => {
        let api = "http://localhost:9000/display";  // th. backend link
        let response = await axios.get(api); // get res from back 
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(() => {
        getData();
    }, []);

    const ans = mydata.map((key) =>
    (
        <>
            <tr align="center">
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
            here is our DATA
            <div style={{ height: "90vh", border: "1px solid black" }}>
                <table border={1} width={650} align='center'>
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
