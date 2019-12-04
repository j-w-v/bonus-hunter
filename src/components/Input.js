import React from 'react';

const Input = (props) => {

    return ( 
        <input
        type="text"
        value={props.value}
        onChange={e => props.setInput(e.target.value)}
        placeholder="New bonus"
      />
     );
}
 
export default Input;
