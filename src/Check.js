import React,{Component} from 'react';
import axios from 'axios';

class check extends Component{
   constructor() {
      super();
      this.state = {
        
        seminarhall:"",
        session:"",
        fromdate:""

      }
      
    };


     fetchSeminar = async (event) => {
        const response = await axios.get("http://localhost:5000/fetchsem")

        this.setState({
                              seminarhall:response.data.seminarhall
                            })
     
                     
            }

      fetchSession = async (event) => {
        const response = await axios.get("http://localhost:5000/fetchses")

        this.setState({
                              session:response.data.session
                            })
     
                     
            }

       fetchDate = async (event) => {
        const response = await axios.get("http://localhost:5000/fetchdate")

        this.setState({
                              fromdate:response.data.fromdate
                            })
     
                     
            }


        

           render()
  {

       this.fetchSeminar()
       this.fetchSession()
       this.fetchDate()

    return (
      <div>
          <div>
        <button className="fetch-button" onClick={this.fetchSeminar}>
          Fetch Data
        </button>
      </div>
       <div>{this.state.seminarhall}</div>
        <div>{this.state.session}</div>
          <div>{this.state.fromdate}</div>
       </div>
                      
                 
                      );
}
}
export default check;
