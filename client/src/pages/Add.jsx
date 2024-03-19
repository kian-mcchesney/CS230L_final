import React from 'react'
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';

const Add = ()=> {
    const [book,setBook]=useState({
        title:"",
        description:"",
        price:null,
        cover:"",

    });
const [error,setError] = useState(false)
const navigate = useNavigate();



const handleChange=(e)=>{
    setBook((prev) => ({...prev,[e.target.name]: e.target.value}));
}
const handleClick = async (e) =>{
    e.preventDefault();
    try {
        await axios.post("http://localhost:8800/books", book);
        navigate("/")
    } catch (err) {
        console.log(err);
        setError(true)
        
    }
}


    return(
        <div className='form'>

            <h1>Add New Book</h1>
            <input type="text" placeholder='title' onChange={handleChange} name="title"></input>
            <input type="text" placeholder='description' onChange={handleChange} name="description"></input>
            <input type="number" placeholder='price' onChange={handleChange} name = "price"></input>
            <input type="text" placeholder='cover' onChange={handleChange}name="cover"></input>

        <button onClick={handleClick}>Add</button>
        {error && "Error: something went wrong"}
        <button onClick={() => navigate("/")}>Home</button>
        </div>
    )
}
export default Add