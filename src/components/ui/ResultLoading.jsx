import React from 'react'
import styled from 'styled-components'
import MainLogo from '../common/MainLogo'

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  background: #111220;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Text = styled.p``
export default function ResultLoading() {
  return (
    <Screen>
      <MainLogo
        value={{
          width: 342,
          height: 163,
        }}
      />
      <Text>당신의 취향을 분석하고 있어요</Text>
    </Screen>
  )
}
