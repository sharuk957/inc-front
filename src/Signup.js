import react from 'react';
import LeftField from './inputfield'
import * as ReactBootstrap from "react-bootstrap"
import {BrowserRouter,Link} from 'react-router-dom'
import './login.css';
function Signup(props) {
    return(
        <div className="flex-container text-center">
        <div style={{height:"500px"}}>
        <h1 >Signup</h1>
    <LeftField type="text" name="name" label="Name"/>
    <LeftField type="email" name="email" label="Email"/>
    <LeftField type="text" name="mobile" label="Mobile Number"/>
    <LeftField type="password" name="name" label="Password"/>
    <ReactBootstrap.Button variant="primary" type="submit">
    Submit
  </ReactBootstrap.Button>
 
  <div className="p-3"><Link style={{textDecoration:'none'}} to="/" > Already have an account</Link></div>

    </div>
    </div>
    )
}
export default Signup;