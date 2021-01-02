import React from "react";
import "./styles.css";
import styled from 'styled-components'

export default function App() {
  return (
         <AppWrapper><Greeting>Main default, keep hacking bro</Greeting></AppWrapper>
  );
}

const AppWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

const Greeting = styled.h2`
   color: plum;
`