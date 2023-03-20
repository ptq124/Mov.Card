import React from 'react'
import styled from 'styled-components'
const Btn = styled.button`
  background: #ffffff;
  border-radius: 48px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;

  width: 233px;
  height: 85px;

  outline: none;

  margin-top: 2%;
  color: black;

  :focus {
    color: white;
    background-color: #b4b0de;
  }
  :hover {
    background-color: #e2e0ff;
  }
`
export default function Button({ text, onClick }) {
  return <Btn onClick={onClick}>{text}</Btn>
}
