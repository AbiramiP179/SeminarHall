import React,{Component} from 'react';
import './BookingForm.css';
import Axios from 'axios';
import ReactDOM from 'react-dom';

const hheading ={
    width: '300px',
        border: '1px solid #d6d7da',
        padding: '0px 15px 15px 15px',
        borderRadius: '5px',
        fontFamily: 'arial',
        lineHeight: '16px',
        color: '#333333',
        fontSize: '14px',
        background: '#ffffff',
        margin: '100px auto'
  }
const lllabel={
  display: 'block',
  //margin-bottom: 10px;
  width: '90%'
} 
const iiinput={
  display: 'block',
  //margin-bottom: 10px;
     width: '90%',
     padding: '10px',
     border: 'solid 1px #BDC7D8'
}
const bbbutton={
   backgroundColor: '#00BFFF',
     borderColor: '#3ac162',
     fontWeight: 'bold',
     padding: '12px 15px',
     color: '#ffffff'
}
const eerrormessage={
  color: '#cc0000',
    marginBottom: '12px'
}

class Bookingform extends Component {
   constructor() {
      super();
      this.state = {
 
      fromdate:"",
      todate:"",
      seminarhall:"",
      purposeofevent:"",
      numberofpersons:"",
      session:""
      }

     
    };

 
  

  submituserBookingForm=async(event)=> {
      event.preventDefault();
     
      try {
      var signupRes = await Axios.post("http://localhost:5000/send",{ 
       seminarhall:this.state.seminarhall,
      purposeofevent:this.state.purposeofevent,
      numberofpersons:this.state.numberofpersons,
      fromdate:this.state.fromdate,
      todate:this.todate,
      session:this.state.session

    });




      window.alert("Successfully request sent");
      this.props.history.push("/bookings");
    } catch (err) {
      window.alert(err.response.data);
    } 
      }

  // submituserBookingForm=async(event)=> {


  //       Axios({
  //           method: "POST", 
  //           url:"http://localhost:3000/send", 
  //           data: {
  //       name: "harsh",
  //       email: "m.harshidha@gmail.com",
  //       messageHtml: "Hall Requested"
  //           }
  //       }).then((response)=>{
  //           if (response.data.msg === 'success'){
  //               alert("Email sent, awesome!"); 
  //               this.resetForm()
  //           }else if(response.data.msg === 'fail'){
  //               alert("Oops, something went wrong. Try again")
  //           }
  //       })
  //   }
  
   
  render()
  {
    return (

     <div class="bg"> 
         <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 bnn">
      
          <h3>Requirements</h3>
          <form name="userbookingForm"  onSubmit= {this.submituserBookingForm} >
          <label style={lllabel}>From Date:</label>
          <input style={iiinput} type="Date" defaultValue="2020-09-28" name="FromDate" onChange={(e) =>this.setState({
                              fromdate: e.target.value
                            })}  />
          
          <label style={lllabel}>ToDate:</label>
          <input style={iiinput} type="Date" name="ToDate" onChange={(e) =>this.setState({
                              todate: e.target.value
                            }) } />
          
          <label style={lllabel}>Session:
           <select style={iiinput} name="Session"  onChange= {(e) =>this.setState( {
                              session: e.target.value
                            })}>
              <option value="Full day">Full day</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select></label>
           
            <label style={lllabel}>Seminar Hall:
           <select style={iiinput} name="SeminarHall" onChange={(e) =>this.setState({
                              seminarhall: e.target.value
                            })}>
              <option value="CSE Seminar Hall">CSE Seminar Hall</option>
              <option value="Civil">Civil</option>
              <option value="EEE seminar Hall">EEE seminar Hall</option>
              <option value="ECE Seminar Hall">ECE Seminar Hall</option>
              <option value="Mechanical Seminar Hall">Mechanical Seminar Hall</option>
              <option value="IT seminar Hall">IT seminar Hall</option>
              <option value="Architecture Seminar Hall">Architecture Seminar Hall</option>
            </select></label>
           
          <label style={lllabel}>Number of Persons:</label>
          <input style={iiinput} type="text" name="NumberofPersons"  onChange={(e) =>this.setState({
                              numberofpersons: e.target.value
                            })
                          } />
         
          <label style={lllabel}>Purpose of The Event:</label>
          <input style={iiinput} type="text" name="PurposeofEvent"  onChange={(e) =>this.setState({
                              purposeofevent: e.target.value
                            })} />
          

          <button class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit">Check Availability</button>
          </form>
         
    </article>
  </div>
      );
  }
}
export default Bookingform;
