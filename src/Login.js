aimport React,{Component} from 'react';
import Axios from 'axios';
import './Login.css'
const heading ={
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
const llabel={
  display: 'block',
  //margin-bottom: 10px;
  width: '90%'
} 
const iinput={
  display: 'block',
  //margin-bottom: 10px;
     width: '90%',
     padding: '10px',
     border: 'solid 1px #BDC7D8'
}
const bbutton={
   backgroundColor: '#00BFFF',
     borderColor: '#3ac162',
     fontWeight: 'bold',
     padding: '12px 15px',
     color: '#ffffff'
}
const errormessage={
  color: '#cc0000',
    marginBottom: '12px'
}

class Login extends Component{
   constructor() {
      super();
      this.state = {
        // fields: {},
        // errors: {}
        email: "",
        password: ""
      }
      this.routeChange=this.routeChange.bind(this);

      //this.handleChange = this.handleChange.bind(this);
      //this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };
  // handlechange =event=>{
  //   event.preventDefault()
  //   let fields = this.state.fields;
  //   let x = event.target.name;
  //      fields.x = event.target.value;
  //      this.setState({
  //       fields
  //       });

  // }
  submituserRegistrationForm=async(event)=> {
      event.preventDefault();
      // if (this.validateForm()) {
            // let fields = {};
            // fields["email-address"] = "";
            // fields["password"] = "";
            // this.setState({fields:fields});
      try {
      var loginRes = await Axios.post("http://localhost:5000/signin",{ 
      email: this.state.email,
      password: this.state.password
    });
      window.alert("Successful Login");
      this.props.history.push("/bookings");
    } catch (err) {
      window.alert(err.response.data);
    } 
      }

    routeChange(){
      this.props.history.push("/signup");
    }  
    // }
  //   validateForm() {

  //     let fields = this.state.fields;
  //     let errors = {};
  //     let formIsValid = true;

  //     if (!fields["Username"]) {
  //       formIsValid = false;
  //       errors["Username"] = "*Please enter your username.";
  //     }

  //     if (typeof fields["Username"] !== "undefined") {
  //       if (!fields["Username"].match(/^[a-zA-Z ]*$/)) {
  //         formIsValid = false;
  //         errors["Username"] = "*Please enter alphabet characters only.";
  //       }
  //     }

  //     if (!fields["email"]) {
  //       formIsValid = false;
  //       errors["email"] = "*Please enter your email-ID.";
  //     }
  //     if (typeof fields["email"] !== "undefined") {
  //       //regular expression for email validation
  //       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  //       if (!pattern.test(fields["emailid"])) {
  //         formIsValid = false;
  //         errors["email"] = "*Please enter valid email-ID.";
  //       }
  //     }
  //     if (!fields["Password"]) {
  //       formIsValid = false;
  //       errors["Password"] = "*Please enter your password.";
  //     }

  //    if (typeof fields["Password"] !== "undefined") {
  //       if (!fields["Password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
  //         formIsValid = false;
  //         errors["Password"] = "*Please enter secure and strong password.";
  //       }
  //     }

  //     this.setState({
  //       errors: errors
  //     });
  //     return formIsValid;
  // }
  
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
      

      /*<div >
     <div style={heading}>
        <h3>Login page</h3>
        <form style={heading}  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label style={llabel}>Name</label>
        <input style={iinput} type="text" name="username" value={this.state.fields.Username} onChange={this.handleChange} />
        <div style={errormessage} className="errorMsg">{this.state.errors.Username}</div>
        <label style={llabel}>Email ID:</label>
        <input style={iinput} type="text" name="emailid" value={this.state.fields.email} onChange={this.handleChange}  />
        <div style={errormessage}className="errorMsg">{this.state.errors.email}</div>
        <label style={llabel}>Password</label>
        <input style={iinput} className="db fw6 lh-copy f6" type="password" name="password" value={this.state.fields.Password} onChange={this.handleChange} />
        <div style={errormessage}className="errorMsg">{this.state.errors.Password}</div>
        <button style={bbutton} type="submit">Login </button>
        </form>
    </div>
   </div>*/
   <div class="bg a">
  <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 bnn">

   <main className ="pa4 black-80">
  <form class="measure center" name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Login Page</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Email</label>

        <input 
        class="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"  
        onChange={(e) =>this.setState({
                              email: e.target.value
                            })
                          } 
        type="email" 
        name="email-address"  
        id="email-address"/>

      </div>
      <div class="mv3">

        <label class="db fw6 lh-copy f6" for="password">Password</label>

        <input 
        class="b pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100" 
        type="password" 
        name="password" 
        onChange={(e) =>this.setState({
                              password: e.target.value
                            })
                          }  
        id="password"/>

  
      </div>
      <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
    </fieldset>
    <div class="">
      <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    <div class="lh-copy mt3">
      <a href="#0" class="f6 link dim black db" onClick={this.routeChange}>Sign up</a>
       </div>
  </form>
</main>
   
 </article>

 </div>
      );
  }
} 
export default Login;