import React, { useEffect } from 'react'
import styled from 'styled-components'
import SelectCard from '../components/ui/SelectCard'
import { OpacityEffect } from '../util/OpacityEffect'
const SelectPage = styled.section`
  height: 75%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 799px) {
    height: 75%;
    justify-content: space-evenly;
  }
`
const Text = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 29.83px;
  @media screen and (max-width: 799px) {
    font-size: 20px;
  }
`

export default function Select() {
  useEffect(() => {
    OpacityEffect()
  })

  return (
    <SelectPage>
      <Text> 둘중 더 원하는 카드를 클릭 하세요.</Text>
      <SelectCard />
    </SelectPage>
  )
}
