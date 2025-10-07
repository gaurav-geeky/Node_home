import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Form() {

    let [frmdata, setFrmdata] = useState({});

    let handelinput = (e) => {
        let { name, value } = e.target;
        setFrmdata({ ...frmdata, [name]: value });
        console.log(frmdata)
    }

    const handelSubmit = async (e) => {
        const api = "http://localhost:9000/save";
        const resp = await axios.post(api, frmdata);
        console.log(resp);
    }

    return (
        <>
            <div>
                <div style={{ display: 'flex', gap: '10px', }} >
                    <Link style={{ color: 'red', textDecoration: 'none' }} to="/">Home</Link>
                    <Link style={{ color: 'blue', textDecoration: 'none' }} to="/form">Form</Link>
                </div>

                <h1> Form page of student</h1>

                Enter name : <input type="text" name='nm' onChange={handelinput} />
                <br /> <br />

                Enter Roll no : <input type="text" name='rn' onChange={handelinput} />
                <br /> <br />

                Enter city : <input type="text" name='ct' onChange={handelinput} />
                <br /> <br />

                Enter fees : <input type="text" name='fe' onChange={handelinput} />
                <br /> <br />

                <button onClick={handelSubmit}>submit</button>
            </div>
        </>
    )
}

export default Form
