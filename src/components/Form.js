import React, { useState } from 'react'
import axios from 'axios';


function Form(props) {
 const [userName, setUserName] = useState('')
 const handleSubmit = async (event) => {
  event.preventDefault();
  let res = await axios.get(`https://api.github.com/users/${userName}`);
  props.onSubmit(res.data);
  setUserName('');
 };

 return (
  <form onSubmit={handleSubmit}>
   <input
    type="text"
    value={userName}
    onChange={event => setUserName(event.target.value)}
    placeholder="GitHub username"
    required
   />
   <button>Add card</button>
  </form>
 );
}

export default Form