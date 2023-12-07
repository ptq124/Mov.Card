import React from 'react'
import { Outlet } from 'react-router-dom'

import styled from 'styled-components'

import { SelectCardContextProvider } from './context/SelectCardContext'

export default function App() {
  return (
    <SelectCardContextProvider>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </SelectCardContextProvider>
  )
}

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
`
