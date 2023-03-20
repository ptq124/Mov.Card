import React from 'react'
import { ReactComponent as ReStartIcon } from './restart.svg'
import styled from 'styled-components'

const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 214px;
  height: 61px;
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
  @media screen and (max-width: 799px) {
    display: none;
  }
`

export default function ReStart() {
  return (
    <Btn
      onClick={() => {
        window.location.replace('/')
      }}
    >
      <ReStartIcon />
      Restart
    </Btn>
  )
}
