import { SelectType } from '../shared/type'

interface CardType {
  stage: number
  display: boolean
}

export function nextCard(data: SelectType[], stage: number) {
  data.map((d: CardType) =>
    d.stage === stage + 1 ? (d.display = true) : (d.display = false)
  )
  return data
}

export function backCard(data: SelectType[]) {
  const curData = data.filter((d: CardType) => d.display === true)
  const curStage = curData[0].stage
  data.map((d: CardType) =>
    d.stage === curStage - 1 ? (d.display = true) : (d.display = false)
  )
  return data
}
