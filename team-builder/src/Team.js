import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 5px solid grey;
  width: 50%;
  margin: 0 auto;
`;

function Team({ props }) {
  return (
    <Wrapper>
      <h1>
        {" "}
        {props.fname} {props.lname}{" "}
      </h1>
      <h2> {props.email} </h2>
      <h3> {props.role} </h3>
    </Wrapper>
  );
}

export default Team;
