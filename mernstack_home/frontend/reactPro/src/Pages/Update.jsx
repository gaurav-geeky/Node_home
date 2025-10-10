import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Update() {

    let [showdata, setShowdata] = useState([]);

    let [editme, setEditme] = useState(null);

    let dataLoad = async () => {
        let api = "http://localhost:9000/displayupdate";
        const response = await axios.put(api)
        console.log(response.data);
        setShowdata(response.data);
    }

    useEffect(() => {
        dataLoad();
    }, [])

    const myDel = async (e) => {
        const api = `http://localhost:9000/updatedelete?id=${e}`;
        const response = await axios.post(api);
        alert(response.data.msg);
        dataLoad();
    }

    //  🧠 🚀 🧠 🚀
    // Edit data
    const myEdit = async (e) => {
        const api = `http://localhost:9000/updateEdit?id=${e}`;
        const response = await axios.post(api);
        console.log(response.data)
        setEditme(response.data);
    }

    // handle new values
    const handlechange = (e) => {
        const { name, value } = e.target;
        setEditme({ ...editme, [name]: value })

    }
    // save updated values
    const handleSave = async () => {
        const api = `http://localhost:9000/editSave`;
        const response = await axios.post(api, {
            id: editme._id,
            name: editme.name,
            rollno: editme.rollno,
            city: editme.city,
            fees: editme.fees,
        });
        alert(response.data.msg);
        setEditme(null)
        dataLoad();
    }

    //  🧠 🚀 🧠 🚀

    const result = showdata.map((each) => {
        return (
            <>
                <tr align="center" bgcolor='lightgreen' >
                    <td> {each.name} </td>
                    <td> {each.rollno} </td>
                    <td> {each.city} </td>
                    <td> {each.fees} </td>
                    <td>
                        <a href="#" onClick={() => myEdit(each._id)}> Edit </a>
                        &ensp;
                        <a href="#" onClick={() => myDel(each._id)}> delete me </a>
                    </td>
                </tr>
            </>
        )
    })


    return (
        <>
            <div style={{ height: "90vh", border: "1px solid black" }} >
                <h1> Update data here..</h1>
                <hr />

                {/*  all data here */}
                <table border={1} width={700} align='center' style={{ margin: "20px auto", }} >
                    <tr>
                        <th> Name</th>
                        <th> Roll No. </th>
                        <th> City</th>
                        <th> Fees</th>
                        <th> Update data</th>
                    </tr>
                    {result}
                </table>


                {/* Data to edit   🧠 🚀 🧠 🚀 */}
                {editme && (
                    <div style={{ margin: "20px auto", width: "600px", }}>
                        Edit name: <input type="text" name='name' value={editme.name} onChange={handlechange} />
                        <br /> <br />
                        Edit Roll No : <input type="text" name='rollno' value={editme.rollno} onChange={handlechange} />
                        <br /> <br />
                        Edit City: <input type="text" name='city' value={editme.city} onChange={handlechange} />
                        <br /> <br />
                        Edit Fees: <input type="text" name='fees' value={editme.fees} onChange={handlechange} />
                        <br /> <br />

                        <button type="button" onClick={handleSave}>Save it!</button>
                        &ensp;
                        <button type="button" onClick={() => setEditme(null)}>Cancel</button>
                    </div>
                )}

            </div>
        </>
    )
}

export default Update

// while editing our