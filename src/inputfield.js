import react from 'react'
import * as ReactBootstrap from "react-bootstrap"
function LeftField(props) {

    return(
        <div className="p-3">
            <ReactBootstrap.Form.Label>{props.label}</ReactBootstrap.Form.Label>

            
                <ReactBootstrap.Form.Control  type={props.type} name={props.name} />
        </div>
    )

}

export default LeftField;