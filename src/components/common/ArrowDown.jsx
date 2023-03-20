import React from 'react'
import { ReactComponent as ArrowdownIcon } from '../common/arrow_down.svg'
import styled from 'styled-components'

const Btn = styled.button`
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 64px;
  border: 1px solid white;
  background: transparent;

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    transform: rotate(-90deg);
  }
`

export default function ArrowDown({ back, value }) {
  const { width, height } = value
  return (
    <Btn
      onClick={() => {
        back()
      }}
    >
      <ArrowdownIcon width={width} height={height}></ArrowdownIcon>
    </Btn>
  )
}
