import React, { useState } from "react";
import { v4 as uuid } from "uuid"; // GROSS
import "./App.css";
import Form from "./Form";
import Team from "./Team";

const initialMemberList = [
  {
    id: uuid(),
    fname: "Adonis",
    lname: "Puente",
    email: "adonis.puente@gmail.com",
    role: "Web Development",
  },
];

const memberForm = {
  fname: "",
  lname: "",
  email: "",
  role: "Front End",
};

function App() {
  const [team, setTeam] = useState(initialMemberList);

  const [form, setForm] = useState(memberForm);

  const Changing = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const Submiting = (event) => {
    event.preventDefault();
    const newPerson = {
      id: uuid(),
      fname: form.fname,
      lname: form.lname,
      email: form.email,
      role: form.role,
    };
    setTeam([...team, newPerson]);

    setForm(memberForm);
  };
  return (
    <div className="App">
      <Form values={form} Changing={Changing} Submiting={Submiting} />

      {team.map((event) => {
        return <Team props={event} key={event.id} />;
      })}
    </div>
  );
}

export default App;
