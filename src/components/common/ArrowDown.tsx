import { ReactComponent as ArrowdownIcon } from '../../assets/icons/arrow_down.svg'
import styled from 'styled-components'
import { Area } from '../../shared/type'

interface ArrowProps {
  back: () => void
  value: Area
}

export default function ArrowDown({ back, value }: ArrowProps) {
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

const Btn = styled.button`
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 64px;
  border: 1px solid white;
  background: transparent;

  :hover {
    background: rgba(255, 255, 255, 0.15);
  }

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    transform: rotate(-90deg);
  }
`
