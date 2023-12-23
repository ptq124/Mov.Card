import React from 'react'
import { ReactComponent as ArrowupIcon } from '../../assets/icons/arrow_up.svg'
import styled from 'styled-components'

const Btn = styled.button`
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  border-radius: 64px;
  border: 1px solid white;

  :hover {
    background: rgba(255, 255, 255, 0.15);
  }

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    transform: rotate(-90deg);
  }
`

export default function ArrowUp({ go, value }) {
  const { width, height } = value

  return (
    <Btn
      onClick={() => {
        go()
      }}
    >
      <ArrowupIcon width={width} height={height}></ArrowupIcon>
    </Btn>
  )
}
