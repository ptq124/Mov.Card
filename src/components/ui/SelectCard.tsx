import styled from 'styled-components'
import Card from '../common/Card'
import { SelectType } from '../../shared/type'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

interface SelectCardProps {
  gif: string[]
}

export default function SelectCard({ gif }: SelectCardProps) {
  const data = useSelector((state: RootState) => state.card.cardData)
  return (
    <CardBox>
      {data.map((info: SelectType, idx: number) => (
        <Card key={idx} info={info} gif={gif} />
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
