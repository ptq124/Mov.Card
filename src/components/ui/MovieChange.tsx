import styled from 'styled-components'
import ArrowDown from '../common/ArrowDown'
import ArrowUp from '../common/ArrowUp'
import { ResultFuncType } from '../../pages/Result'

export default function MovieChange({ 결과데이터조작 }: ResultFuncType) {
  const go = () => {
    결과데이터조작('up')
  }

  const back = () => {
    결과데이터조작('down')
  }
  return (
    <SideBar>
      <ArrowUp
        go={go}
        value={{
          width: 42,
          height: 43,
        }}
      />
      <ArrowDown
        back={back}
        value={{
          width: 28,
          height: 28,
        }}
      />
    </SideBar>
  )
}

const SideBar = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 30%;
    width: 100%;
    flex-direction: row;
    border: 1px solid red;
  }
`
