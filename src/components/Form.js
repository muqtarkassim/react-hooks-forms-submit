import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
const [dataS,setdataS]=useState([])
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
   
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  //const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    // first name is required
    if (firstName.length && lastName.length> 0) {
      const formData = { firstName: firstName, lastName: lastName };
      console.log("cliked")
      //console.log(formData )
      const dataArray=[...dataS,formData]
      console.log(dataArray)
      setdataS(dataArray)
      setFirstName("");
      setLastName("");
      
      //setErrors([]);
    }
     else {
     // setErrors(["First name is required!"]);
     console.log('error')
    }
  }
 
  const listItems =dataS.map((item,index)=>
  <p key={index}>{item.firstName} <span>{item.lastName}</span></p>)

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h2> list of submissions </h2>
    {listItems}
    </div>
  );
}

export default Form;
