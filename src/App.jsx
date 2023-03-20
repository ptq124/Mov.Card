import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './components/navbars/Nav'
import styled from 'styled-components'
import StartLoading from './components/ui/StartLoading'
import { SelectCardContextProvider } from './context/SelectCardContext'
import ResultLoading from './components/ui/ResultLoading'
import Cricle1 from './components/ui/Cricle1'

const Background = styled.main`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
`

export default function App() {
  const [ready, setReady] = useState(true)
  const { pathname } = useLocation()

  useEffect(() => {
    setReady(true)
    setTimeout(() => {
      setReady(false)
    }, 2000)
  }, [])

  return ready ? (
    <>
      {pathname === '/' && <StartLoading />}{' '}
      {pathname.split('/')[1] === 'result' && <ResultLoading />}
    </>
  ) : (
    <SelectCardContextProvider>
      <Background
        bg={
          {
            '': '../imgs/bg/시작배경화면.jpg',
            select: '../imgs/bg/선택배경화면.jpg',
            result: '',
          }[pathname.split('/')[1]]
        }
      >
        <Nav />
        <Outlet />
        {pathname === '/' && <Cricle1 />}
      </Background>
    </SelectCardContextProvider>
  )
}
