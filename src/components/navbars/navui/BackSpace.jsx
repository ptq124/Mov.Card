import React from 'react'
import { ReactComponent as BackSpaceIcon } from './backspace.svg'
import styled from 'styled-components'

const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 185px;
  height: 57px;
  background: transparent;
  color: white;
  gap: 10%;

  border: 1px solid #ffffff;
  border-radius: 47px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 40px;

  :hover {
    background: rgba(255, 255, 255, 0.15);
  }
`

export default function BackSpace() {
  return (
    <Btn>
      <BackSpaceIcon />
      Back
    </Btn>
  )
}
