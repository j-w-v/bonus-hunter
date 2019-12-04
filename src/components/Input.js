import React from 'react';

const Input = (props) => {

    return ( 
        <div className="gameInput">
        <input
          type="text"
          value={props.value}
          onChange={e => props.setInput(e.target.value)}
          placeholder="Game Name..."
        />
        </div>
     );
}
 
export default Input;
