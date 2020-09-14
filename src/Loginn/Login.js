
import React,{Component} from 'react';
import Axios from 'axios';
	import './images/icons/favicon.ico'
import './vendor/bootstrap/css/bootstrap.min.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './vendor/animate/animate.css'
import './vendor/css-hamburgers/hamburgers.min.css'
import './vendor/select2/select2.min.css'
import './css/util.css'
import './css/main.css'
import  image from './images/img-01.png'

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

 
  render()
  {
    return (

	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src={image} alt="IMG"/>
				</div>

				<form class="login100-form validate-form"  onSubmit= {this.submituserRegistrationForm} >
					<span class="login100-form-title">
						Member Login
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" onChange={(e) =>this.setState({
                              email: e.target.value
                            })
                          } placeholder="Email"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" onChange={(e) =>this.setState({
                              password: e.target.value
                            })
                          }   data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>

						 <div class="lh-copy mt3">
      <a href="#0" class="f6 link dim black db" onClick={this.routeChange}>Sign up</a>
       </div>
					</div>

		
				</form>
			</div>
		</div>
	</div>
	
      );
  }
} 
export default Login;	

