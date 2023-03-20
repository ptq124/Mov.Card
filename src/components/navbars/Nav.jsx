import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import ResultNav from './ResultNav'
import SelectNav from './SelectNav'
import StartNav from './StartNav'
const Header = styled.header`
  height: 15%;
  width: 80%;
  margin: auto;
  display: flex;
  @media screen and (max-width: 540px) {
    height: 7%;
  }
`
export default function Nav() {
  const { pathname } = useLocation()

  return (
    <Header>
      {pathname === '/' && <StartNav />}
      {pathname === '/select' && <SelectNav />}
      {pathname.split('/')[1] === 'result' && <ResultNav />}
    </Header>
  )
}
