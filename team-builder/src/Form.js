import React from "react";

function Form(props) {
  const { values, Changing, Submiting } = props;
  return (
    <form>
      <label>
        <input
          placeholder="First Name"
          name="fname"
          type="text"
          value={values.fname}
          onChange={Changing}
        ></input>
      </label>
      <label>
        <input
          placeholder="Last Name"
          name="lname"
          type="text"
          value={values.lname}
          onChange={Changing}
        ></input>
      </label>
      <label>
        <input
          placeholder="Email"
          name="email"
          type="text"
          value={values.email}
          onChange={Changing}
        ></input>
      </label>
      <label>
        <select name="role" type="text" onChange={Changing}>
          <option value="Front End">Front End</option>
          <option value="Back End">Back End</option>
          <option value="Data Science">Data Science</option>
          <option value="Web Development">Web Development</option>
        </select>
      </label>
      <button onClick={Submiting}> Submit Me </button>
    </form>
  );
}

export default Form;
