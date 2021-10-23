import React,{useState} from 'react';
import Textareas from './textarea';
import * as ReactBootstrap from "react-bootstrap"
function Register(){
  const initialFormData = Object.freeze({
    name: "",
    address: "",
    city: "",
    state: "",
    email: "",
    company: "",
    phnno: "",
    logo: "",
    team: "",
    products: "",
    problem: "",
    marketing: "",
    size: "",
    revenue: "",
    advantage: "",
    proposition: "",
    solution: "",
    details:"",
    type:""
    
  });
    const [formData,updateFormData]=React.useState(initialFormData)
    const handleChange = (e) => {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData)
      fetch('http://127.0.0.1:8000/api/registration/',{
        method: "POST",
        header:{
          'Content-Type':'application/json'
        },
        data:JSON.stringify(initialFormData)
      })
    };
    return(
        <div>
          <h1 style={{textAlign: 'center'}}>Register your Company here</h1>
            <ReactBootstrap.Container>
             <ReactBootstrap.Row>
               <ReactBootstrap.Col>
                  <div className="p-3">
                    <ReactBootstrap.Form.Label>Name</ReactBootstrap.Form.Label>

            
                    <ReactBootstrap.Form.Control  type="text" name="name" onChange={handleChange}/>
                  </div>
               </ReactBootstrap.Col>
               <ReactBootstrap.Col>
                  <div className="p-3">
                    <ReactBootstrap.Form.Label>Address</ReactBootstrap.Form.Label>

            
                    <ReactBootstrap.Form.Control  type="text" name="address" onChange={handleChange}/>
                  </div>
               </ReactBootstrap.Col>
             </ReactBootstrap.Row>
             <ReactBootstrap.Row>
               <ReactBootstrap.Col>
               <div className="p-3">
                    <ReactBootstrap.Form.Label>City</ReactBootstrap.Form.Label>

            
                    <ReactBootstrap.Form.Control  type="text" name="city" onChange={handleChange}/>
                  </div>
               </ReactBootstrap.Col>
               <ReactBootstrap.Col>
               <div className="p-3">
                    <ReactBootstrap.Form.Label>State</ReactBootstrap.Form.Label>

            
                    <ReactBootstrap.Form.Control  type="text" name="state" onChange={handleChange}/>
                  </div>
               </ReactBootstrap.Col>
             </ReactBootstrap.Row>
             <ReactBootstrap.Row>
               <ReactBootstrap.Col>
               <div className="p-3">
                    <ReactBootstrap.Form.Label>Email</ReactBootstrap.Form.Label>

            
                    <ReactBootstrap.Form.Control  type="email" name="email" onChange={handleChange}/>
                  </div>
               </ReactBootstrap.Col>
               <ReactBootstrap.Col>
               <div className="p-3">
                    <ReactBootstrap.Form.Label>Company Name</ReactBootstrap.Form.Label>

            
                    <ReactBootstrap.Form.Control  type="text" name="company" onChange={handleChange}/>
                  </div>
               </ReactBootstrap.Col>
             </ReactBootstrap.Row>
             <ReactBootstrap.Row>
               <ReactBootstrap.Col>
               <div className="p-3">
                    <ReactBootstrap.Form.Label>Phone number</ReactBootstrap.Form.Label>

            
                    <ReactBootstrap.Form.Control  type="text" name="phnno" onChange={handleChange}/>
                  </div>
               </ReactBootstrap.Col>
               <ReactBootstrap.Col>
               <div className="p-3">
                    <ReactBootstrap.Form.Label>Company logo</ReactBootstrap.Form.Label>

            
                    <ReactBootstrap.Form.Control  type="file" name="logo" onChange={handleChange}/>
                  </div>
               </ReactBootstrap.Col>
             </ReactBootstrap.Row>
              <div className="p-3">
                <ReactBootstrap.Form.Label>Describe your team and company</ReactBootstrap.Form.Label>

        
                <ReactBootstrap.Form.Control  as="textarea" name="team" style={{height:"100px"}} onChange={handleChange}/>
              </div>
             <div className="p-3">
                <ReactBootstrap.Form.Label>Describe your company and products</ReactBootstrap.Form.Label>

        
                <ReactBootstrap.Form.Control  as="textarea" name="products" style={{height:"100px"}} onChange={handleChange}/>
              </div>
             <Textareas name="products" label="Describe your company and products" />
             <div className="p-3">
                <ReactBootstrap.Form.Label>Describe your problem you are trying to solve</ReactBootstrap.Form.Label>

        
                <ReactBootstrap.Form.Control  as="textarea" name="problem" style={{height:"100px"}} onChange={handleChange}/>
              </div>
             <div className="p-3">
                <ReactBootstrap.Form.Label>what is unique about your solution</ReactBootstrap.Form.Label>

        
                <ReactBootstrap.Form.Control  as="textarea" name="solution" style={{height:"100px"}} onChange={handleChange}/>
              </div>
             <div className="p-3">
                <ReactBootstrap.Form.Label>what is your value proposition for your customers</ReactBootstrap.Form.Label>

        
                <ReactBootstrap.Form.Control  as="textarea" name="proposition" style={{height:"100px"}} onChange={handleChange}/>
              </div>
             <div className="p-3">
                <ReactBootstrap.Form.Label>who are your competitor and what is your competitive advantage</ReactBootstrap.Form.Label>

        
                <ReactBootstrap.Form.Control  as="textarea" name="advantage" style={{height:"100px"}} onChange={handleChange}/>
              </div>
             <div className="p-3">
                <ReactBootstrap.Form.Label>Explain your revenue model</ReactBootstrap.Form.Label>

        
                <ReactBootstrap.Form.Control  as="textarea" name="revenue" style={{height:"100px"}} onChange={handleChange}/>
              </div>
             <div className="p-3">
                <ReactBootstrap.Form.Label>what is the potential market size of product</ReactBootstrap.Form.Label>

        
                <ReactBootstrap.Form.Control  as="textarea" name="size" style={{height:"100px"}} onChange={handleChange}/>
              </div>
             <div className="p-3">
                <ReactBootstrap.Form.Label>How do you market or plan to market your product</ReactBootstrap.Form.Label>

        
                <ReactBootstrap.Form.Control  as="textarea" name="marketing" style={{height:"100px"}} onChange={handleChange}/>
              </div>
             <div className="p-3">
            <ReactBootstrap.Form.Label>Type of incubation needed</ReactBootstrap.Form.Label>

            
            {['radio'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <ReactBootstrap.Form.Check 
        type={type}
        id={`default-${type}`}
        name="type"
        label="Physical Incubation"
      />

      <ReactBootstrap.Form.Check
        type={type}
        label="virtual Incubation"
        name="type"
        id={`default-${type}`}
      />
    </div>
  ))}
        </div>
             <Textareas name="details" label="upload a detailed business proposal" onChange={handleChange}/>
             <ReactBootstrap.Button variant="primary" type="submit" onClick={handleSubmit}>
    Submit
  </ReactBootstrap.Button>
        </ReactBootstrap.Container>
        </div>
    )
}

export default Register;