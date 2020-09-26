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

          fetchData();

    function acceptrequest(id){
    try {
      var signupRes =  axios.post("http://localhost:5000/acceptid",{ 
      id:id
        });
 //window.alert("Successfully accepted");
      fetchData();
    } catch (err) {
      window.alert(err.response.data);
    } 
      }

      function rejectrequest(id){
      try {
            var signupRes =  axios.post("http://localhost:5000/rejectid",{ 
            id:id
          });
 //window.alert("Successfully accepted");
      fetchData();
    
      }catch (err) {
      window.alert(err.response.data);
    } 
      }





      return (
    <div className="App">

      <h1>These are the requests</h1>
    
     
    
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
                      <th scope="row">{book.id}</th>
                      <td>{book.seminarhall}</td>
                      <td>{book.purposeofevent}</td>
                      <td>{book.numberofpersons}</td>
                       <td><Button variant="success" onClick={() => acceptrequest(book.id)}>Accept</Button></td>
                       <td><Button variant="primary" onClick={() => rejectrequest(book.id)}>Reject</Button></td>
                    </tr>
              
          
            );
          })}
         </tbody>
      </table>
    </div>
  );
}

export default App;
