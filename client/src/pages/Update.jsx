import React from 'react'
import {useState} from "react";
import { Link, useNavigate, useLocation} from "react-router-dom"
import axios from 'axios';

const Update = ()=> {
    const [book,setBook]=useState({
        title:"",
        description:"",
        price:null,
        cover:"",

    });
const [error,setError] = useState(false)

const location = useLocation();
const navigate = useNavigate();
const bookID = location.pathname.split("/")[2];




const handleChange=(e)=>{
    setBook((prev) => ({...prev,[e.target.name]: e.target.value}));
}
const handleClick = async (e) =>{
    e.preventDefault();
    try {
     
        await axios.put(`http://localhost:8800/books/${bookID}`, book);
        navigate("/")
    } catch (err) {
       
        console.log(err);
        setError(true)
        
    }
}


    return(
        <div className='form'>

            <h1>Update the Book</h1>
            <input type="text" placeholder='title' onChange={handleChange} name="title"></input>
            <input type="text" placeholder='description' onChange={handleChange} name="description"></input>
            <input type="number" placeholder='price' onChange={handleChange} name = "price"></input>
            <input type="text" placeholder='cover' onChange={handleChange}name="cover"></input>

        <button className="formButton" onClick={handleClick}>Update</button>
       
        
        <button>
                <Link to="/">Home</Link>
            </button>
       {error && "Something went wrong!"}
        </div>
    )
}
export default Update