import React from 'react';

const Select = (props) => {

    return ( 
        <div className="amountInput">
        £
        <input
        className="amount"
        type="number"
        value={props.value}
        onChange={e => props.setValue(e.target.value)}
        placeholder="0"
        min="0"
        />
        </div>
     );
}
 
export default Select;
