import React from 'react';
import './ButtonComp.css'


const ButtonFetchUsers  = (props) => {
    return ( 
        <button onClick = {props.click}>Add user</button>
     );
}
 
export default ButtonFetchUsers ;