import React from 'react';
import styled from 'styled-components';
import './book.css';
import './App.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';




const GridWrapper = {

   background: '#ff9999',
   padding: '20px'}
const sideheading={
  background: '#ffe5e5',
  padding: '5px',
  marginLeft: '35px'
}   
 
function Home () {
     const list = [
  {
    id: 'a',
    Name: 'CSE Seminar Hall',
    NumberOfSeats: '120'
  },
  {
    id: 'b',
    Name: 'IT Seminar Hall',
    NumberOfSeats: '100'
  },
  {
    id: 'c',
    Name: 'EEE Seminar Hall',
    NumberOfSeats: '140'
  },
  {
    id: 'd',
    Name: 'ECE Seminar Hall',
    NumberOfSeats: '150'
  },
  {
    id: 'e',
    Name: 'Mechanical Seminar Hall',
    NumberOfSeats: '170'
  },
  {
    id: 'f',
    Name: 'Architecture Seminar Hall',
    NumberOfSeats: '200'
  }
  ]
     const namelist=list.map(list=>(<h2>{list.Name}<h5 class="hov" style={sideheading}>SeatsAvailable:{list.NumberOfSeats}</h5></h2>))
     return  <div class="b">
     <div className="App">
       <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={image1} className="sliderimg"/>
      <img src={image2} className="sliderimg"/>
      <img src={image3} className="sliderimg"/>
      </AliceCarousel>
      </div>
     <article class="mw7 center bg-white br3 pa3 pa4-ns mv5 ba b--black-10 bnn">
     <div style={GridWrapper}>{namelist}</div>
     </article>
     </div>
} 
 export default Home
