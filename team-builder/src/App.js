import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuid } from "uuid";
import "./App.css";

const ourTeam = [];

const App = () => {
  const [team, setTeam] = useState(ourTeam);
  const [formValues, setFormValues] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    role: 1
  });

  const onInputChange = event => {
    const inputThatChanged = event.target.name;
    const newValueForInput = event.target.value;
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const newTeamMember = {
      id: uuid(),
      fname: formValues.fname,
      lname: formValues.lname,
      email: formValues.email,
      role: formValues.role
    };
    setTeam([...team, newTeamMember]);
  };

  return (
    <div className='App'>
      <Form
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />
      <h3>Team Members: </h3>
      {team.map(tm => (
        <div key={tm.id}>
          {tm.fname} {tm.lname}
          <br />
          {tm.email}
          <br />
          {tm.role}
        </div>
      ))}
    </div>
  );
};

export default App;
