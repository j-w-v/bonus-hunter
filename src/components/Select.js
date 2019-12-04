import React from 'react';

const Select = (props) => {

    return ( 
   
    <select onChange={e => props.setValue(e.target.value)}>
      <option value="£5">£5</option>
      <option value="£10">£10</option>
      <option value="£15">£15</option>
    </select>

     );
}
 
export default Select;
