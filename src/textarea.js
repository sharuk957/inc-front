import react from 'react';
import * as ReactBootstrap from "react-bootstrap"


function Textareas(props) {

    return (
        <div className="p-3">
        <ReactBootstrap.Form.Label>{props.label}</ReactBootstrap.Form.Label>

        
            <ReactBootstrap.Form.Control  as="textarea" name={props.name} style={{height:"100px"}}/>
    </div>
    )
}

export default Textareas