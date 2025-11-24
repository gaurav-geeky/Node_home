import axios from 'axios';

function Home() {

    const hanldeSubmit1 = async () => {
        const api = `${import.meta.env.VITE_BACK}/home`;
        const response = await axios.get(api);
        console.log(response.data);
    }

    const hanldeSubmit2 = async () => {
        const api = `${import.meta.env.VITE_BACK}/about`;
        const response = await axios.get(api);
        console.log(response.data);
    }
    const hanldeSubmit3 = async () => {
        const api = `${import.meta.env.VITE_BACK}/service`;
        const response = await axios.get(api);
        console.log(response.data);
    }


    return (
        <>
            <div style={{ height: "90vh", border: "1px solid black" }}>

                <h1> hello this is our Home page react</h1>

                <button onClick={hanldeSubmit1}> clck Home </button>
                <button onClick={hanldeSubmit2}> clck About </button>
                <button onClick={hanldeSubmit3}> clck Service </button>
            </div>
        </>
    )
}

export default Home
