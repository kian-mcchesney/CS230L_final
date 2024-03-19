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


const handleChange=(e)=>{
    setBook((prev) => ({...prev,[e.target.name]: e.target.value}));
}
const handleClick = async e =>{
    e.prevetDefault();
    try {
        await axios.post("http://localhost:800/books",book);
        navigate("/")
    } catch (err) {
        console.log(err);
        setError(true)
        
    }
}
const [error,setError] = useState(false)
const navigate = useNavigate();

console.log(book);

    return(
        <div className='form'>

            <h1>Add New Book</h1>
            <input type="text" placeholder='title' onChange={handleChange} name="title"></input>
            <input type="text" placeholder='description' onChange={handleChange} name="description"></input>
            <input type="number" placeholder='price' onChange={handleChange} name = "price"></input>
            <input type="text" placeholder='cover' onChange={handleChange}name="cover"></input>

        <button onClick={handleClick}>Add</button>
        </div>
    )
}
export default Add