import axios from 'axios';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './About.css';

function App(){
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
    
          <table class="table table-hover table-dark" variant="dark">
       <thead>
    <tr >
      <th scope="col">#</th>
      <th scope="col">Seminar Hall</th>
      <th scope="col"> Purpose of Event </th>
         <th scope="col"> Number of persons </th>

      <th scope="col">Accept</th>
      <th scope="col">Reject</th>
    </tr>
  </thead>

        <tbody>
        {books &&
          books.map((book, index) => {
            
            return (
         
                     <tr class="hov">
                      <th scope="row">📖</th>
                      <td>{book.seminarhall}</td>
                      <td>{book.purposeofevent}</td>
                      <td>{book.numberofpersons}</td>
                       <td><Button variant="success">Accept</Button></td>
                       <td><Button variant="primary">Reject</Button></td>
                    </tr>
              
          
            );
          })}
         </tbody>
      </table>
    </div>
  );
}

export default App;
