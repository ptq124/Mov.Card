import styled from 'styled-components'
import Card from '../common/Card'
import { SelectCardContext } from '../../context/SelectCardContext'
import { useContext } from 'react'
import { SelectType } from '../../shared/type'

interface SelectCardProps {
  gif: string[]
}

export default function SelectCard({ gif }: SelectCardProps) {
  const { data } = useContext(SelectCardContext)

  return (
    <CardBox>
      {data.map((info: SelectType, idx: number) => (
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
