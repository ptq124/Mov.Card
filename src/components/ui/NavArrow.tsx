import { ResultFuncType } from '../../pages/Result'
import ArrowDown from '../common/ArrowDown'
import ArrowUp from '../common/ArrowUp'

export default function NavArrow({ 결과데이터조작 }: ResultFuncType) {
  const go = () => {
    결과데이터조작('up')
  }

  const back = () => {
    결과데이터조작('down')
  }
  return (
    <>
      <ArrowUp
        value={{
          width: 20,
          height: 24,
        }}
        go={go}
      />
      <ArrowDown
        value={{
          width: 13,
          height: 15,
        }}
        back={back}
      />
    </>
  )
}
