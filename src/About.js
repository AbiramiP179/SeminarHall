import axios from 'axios';
import React, { useState } from 'react';
import './homme.css'

function About(){
    const [books, setBooks] = useState(null);

      const apiURL = "http://localhost:5000/api";

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setBooks(response.data) 
    }


      return (
    <div className="App">

      <h1>These are the requests</h1>
     

   

        <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
      </div>

      <div className="books">
        {books &&
          books.map((book, index) => {
            
            return (
         
                <div className="details">
                  <p>👨: {book.seminarhall}</p>
                  <p>📖: {book.purposeofevent} pages</p>
                  <p>🏘️: {book.numberofpersons}</p>
                
                </div>
          
            );
          })}
      </div>
    </div>
  );
}

export default About;
