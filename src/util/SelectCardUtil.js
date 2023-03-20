export function nextCard(data, stage) {
  data.map((d) =>
    d.stage === stage + 1 ? (d.display = true) : (d.display = false)
  )
  return data
}

export function backCard(data) {
  const curData = data.filter((d) => d.display === true)
  const curStage = curData[0].stage
  data.map((d) =>
    d.stage === curStage - 1 ? (d.display = true) : (d.display = false)
  )
  return data
}
