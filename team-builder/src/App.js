import React, { useState } from "react";
import Form from "./Form";
import TeamCard from "./TeamCard";
import { Container, Row } from "reactstrap";
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
    role: ""
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
      <Container>
        <Row>
          <Form
            onInputChange={onInputChange}
            formValues={formValues}
            onFormSubmit={onFormSubmit}
          />
        </Row>
        <Row>
          {team.map((teamMember, index) => {
            return <TeamCard teamMember={teamMember} key={index} />;
          })}
        </Row>
      </Container>
      {/* <h3>Team Members: </h3>
      {team.map(tm => (
        <div key={tm.id}>
          {tm.fname} {tm.lname}
          <br />
          {tm.email}
          <br />
          {tm.role}
        </div>
      ))} */}
    </div>
  );
};

export default App;
