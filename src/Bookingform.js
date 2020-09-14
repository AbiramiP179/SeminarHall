import React,{Component} from 'react';
import './BookingForm.css';

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

class Bookingform extends Component{
	 constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      //this.handleChange = this.handleChange.bind(this);
      //this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };
	handlechange =event=>{
		event.preventDefault()
		let fields = this.state.fields;
       fields[event.target.name] = event.target.value;
       this.setState({
        fields
        });

	}
	submituserbookingForm=event=> {
      event.preventDefault();
      if (this.validatebookingForm()) {
          let fields = {};
          fields["FromDate"] = "";
          fields["ToDate"] = "";
          fields["Session"] = "";
          fields["SeminarHall"] = "";
          fields["NumberofPersons"] = "";
          fields["PurposeofEvent"] = "";
          //fields["Session"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }
    validatebookingForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["FromDate"]) {
        formIsValid = false;
        errors["FromDate"] = "*Please enter FromDate.";
      }
       if (!fields["ToDate"]) {
        formIsValid = false;
        errors["ToDate"] = "*Please enter ToDate.";
      }
      if (!fields["Session"]) {
        formIsValid = false;
        errors["Session"] = "*Please select Session.";
      }
      if (!fields["SeminarHall"]) {
        formIsValid = false;
        errors["SeminarHall"] = "*Please select SeminarHall.";
      }

      

      if (!fields["NumberofPersons"]) {
        formIsValid = false;
        errors["NumberofPersons"] = "*Please enter NumberofPersons.";
      }
       if (typeof fields["NumberofPersons"] !== "undefined") {
        if (!fields["NumberofPersons"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["NumberofPersons"] = "*Please enter only Numerals.";
        }
      }
      if (!fields["PurposeofEvent"]) {
        formIsValid = false;
        errors["PurposeofEvent"] = "*Please enter your PurposeofEvent.";
      }

      if (typeof fields["PurposeofEvent"] !== "undefined") {
        if (!fields["PurposeofEvent"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["PurposeofEvent"] = "*Please enter alphabet characters only.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;
  }
	
	//changeusername= event =>{
		//this.setState({
			//UserName: event.target.value
		//})
	//}
	//changePassword= event =>{
		//this.setState({
			//Password: event.target.value
		//})
	//}
	//handlesubmit = event => {
		//this.setState({
			//alert (`$ {this.state.UserName}`)
			//event.preventDefault()

		//})
	//}
	
	render()
	{
		return (

		 <div class="bg">	
         <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 bnn">
			
          <h3>Requirements</h3>
          <form name="userbookingForm"  onSubmit= {this.submituserbookingForm} >
          <label style={lllabel}>From Date:</label>
          <input style={iiinput} type="Date" name="FromDate" value={this.state.fields.FromDate} onChange={this.handleChange}  />
          <div style={eerrormessage} className="errorMsg">{this.state.errors.FromDate}</div>
          <label style={lllabel}>ToDate:</label>
          <input style={iiinput} type="Date" name="ToDate" value={this.state.fields.ToDate} onChange={this.handleChange}  />
          <div style={eerrormessage} className="errorMsg">{this.state.errors.ToDate}</div>
          <label style={lllabel}>Session:
           <select style={iiinput} name="Session" value={this.state.fields.Session} onChange={this.handleChange}>
              <option value="Full day">Full day</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select></label>
            <div style={eerrormessage} className="errorMsg">{this.state.errors.Session}</div>
            <label style={lllabel}>Seminar Hall:
           <select style={iiinput} name="SeminarHall" value={this.state.fields.SeminarHall} onChange={this.handleChange}>
              <option value="CSE Seminar Hall">CSE Seminar Hall</option>
              <option value="Civil Seminar Hall">Civil Seminar Hall</option>
              <option value="EEE seminar Hall">EEE seminar Hall</option>
              <option value="ECE Seminar Hall">ECE Seminar Hall</option>
              <option value="Mechanical Seminar Hall">Mechanical Seminar Hall</option>
              <option value="IT seminar Hall">IT seminar Hall</option>
              <option value="Architecture Seminar Hall">Architecture Seminar Hall</option>
            </select></label>
            <div style={eerrormessage} className="errorMsg">{this.state.errors.SeminarHall}</div>
          <label style={lllabel}>Number of Persons:</label>
          <input style={iiinput} type="text" name="NumberofPersons" value={this.state.fields.NumberofPersons} onChange={this.handleChange} />
          <div style={eerrormessage} className="errorMsg">{this.state.errors.NumberofPersons}</div>
          <label style={lllabel}>Purpose of The Event:</label>
          <input style={iiinput} type="text" name="PurposeofEvent" value={this.state.fields.PurposeofEvent} onChange={this.handleChange} />
          <div style={eerrormessage}className="errorMsg">{this.state.errors.PurposeofEvent}</div>

          <button class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit">Check Availability</button>
          </form>
         
    </article>
  </div>
			);
	}
}	
export default Bookingform;