import { useState } from 'react'
import axios from 'axios';

function Form() {

    let [frmdata, setFrmdata] = useState({});

    let handelinput = (e) => {
        let { name, value } = e.target;
        setFrmdata({ ...frmdata, [name]: value });
        console.log(frmdata)
    }

    const handelSubmit = async (e) => {
        const api = `${import.meta.env.VITE_BACK}/save`; 
        const resp = await axios.post(api, frmdata); // api me form data dalo
        console.log(resp);
    }

    return (
        <>
            <div style={{ height: "90vh", border: "1px solid black" }}>

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
