import React,{ Component} from 'react';

import Fromdata from './fromdata';
class Basicform extends Component {
   constructor(props) {
       super(props);
       
       this.state = {
            username:'',
            password:'',
            usernameerrorMessage:' ',
            passworderrorMessage:' ',
       }
   }
   
   username = (e)=>{
    let username = e.target.value;
        if(username.length < 4){
            this.setState({
                usernameerrorMessage:'UserName Cant Reach'
            });
            return false;
        }
        else{
            this.setState({
                usernameerrorMessage:'Valid UserName'
            });
        }
   }

   password = (e) => {
    let password = e.target.value;
    if(password.length < 5 || password.length > 14){
        this.setState({
            passworderrorMessage:'Password Must be at least 6 to 14 characters long'
        });
        return false;
    }
    else{
        this.setState({
            passworderrorMessage:'Valid Password'
        });
    }
   }

   
   validate = (e) => {
      
       if(e.target[0].value === '' || e.target[0].value === " "){
        this.setState({
            usernameerrorMessage:'Please Enter UserName'
        });
        e.preventDefault()
        return false;
       }
       if(e.target[1].value === '' || e.target[1].value === " "){
        this.setState({
            passworderrorMessage:'Please Enter Password'
        });
        e.preventDefault()
        return false;
       }
       this.setState({username:e.target[0].value})
       this.setState({password:e.target[1].value})
       e.preventDefault()
   }
    render() {
        return (
            <div>
                <form onSubmit={this.validate}>
                    <label htmlFor="username">Username</label><br/>
                    <input type="text" name="Username" onChange={this.username} autoComplete='off'/><br/>
                    <i>{this.state.usernameerrorMessage}</i><br />
                    <label htmlFor="username">Password</label><br/>
                    <input type="text" name="Password" onChange={this.password}/><br/>
                    <i>{this.state.passworderrorMessage}</i><br /><br/>
                    <input type="submit" value="LogIn" name="Submit_Request" />
                </form>
                <Fromdata usr={this.state.username} pwd={this.state.password}/>
            </div>
        );
    }
   
}

export default Basicform;
