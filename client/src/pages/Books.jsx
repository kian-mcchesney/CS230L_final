import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { useEffect } from 'react';
import { useState } from 'react';


const Books = () => {

    const[books,setBooks]=useState([])
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    return (
        <div>
            <h1>Kian's Book Shop</h1>
            <div className="books">
                {books.map(book=>(
                    <div className="book" key={book.id}>
                       {book.cover && <img src={book.cover} alt=""></img>}
                       <h2>{book.title}</h2>
                       <p>{book.description}</p>
                       <span>{book.price}</span>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/add">Add new book</Link>
            </button>
        </div>
    );
}

export default Books;