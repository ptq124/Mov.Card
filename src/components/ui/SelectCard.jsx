import React from 'react'
import styled from 'styled-components'
import { useSelectCardContext } from '../../context/SelectCardContext'
import Card from '../common/Card'

const CardBox = styled.div`
  display: flex;
  gap: 16%;
  @media screen and (max-width: 540px) {
    gap: 10%;
  }
`

export default function SelectCard() {
  const { data } = useSelectCardContext()

  return (
    <CardBox>
      {data.map((info) => (
        <Card key={info.id} info={info} />
      ))}
    </CardBox>
  )
}
