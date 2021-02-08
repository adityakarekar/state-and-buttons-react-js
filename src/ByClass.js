
import{ Component } from "react";


class ByClass extends Component {
   
   state =
   {
       my_info:"React",
       my_mobile: 123456890
   }
   
   myFunction = () =>
   {
     this.setState({
      my_info:"Python",
      my_mobile: 1244467
     }

     )
   }
    render () 
    {
        return(
        <div>
            <h1>
               My name is: {this.state.my_info} and 
        My Mobile no is: {this.state.my_mobile}
            </h1>


            <button onClick={this.myFunction}>
                Click here
            </button>
        </div>
        );
    }
}
export default ByClass;