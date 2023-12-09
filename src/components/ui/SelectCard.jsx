import React from 'react'
import styled from 'styled-components'
import { useSelectCardContext } from '../../context/SelectCardContext'
import Card from '../common/Card'

export default function SelectCard({ gif }) {
  const { data } = useSelectCardContext()

  return (
    <CardBox>
      {data.map((info, idx) => (
        <Card key={info.id} info={info} gif={gif[idx]} />
      ))}
    </CardBox>
  )
}

const CardBox = styled.div`
  display: flex;
  gap: 16%;
  @media screen and (max-width: 540px) {
    gap: 10%;
  }
`
