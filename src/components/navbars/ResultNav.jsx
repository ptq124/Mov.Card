import React from 'react'
import styled from 'styled-components'
import MainLogo from '../common/MainLogo'
import CopyLink from './navui/CopyLink'
import ReStart from './navui/ReStart'
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  margin-top: 4%;
`
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 540px) {
    display: none;
  }
`
const Logo = styled.div`
  text-align: center;
  @media screen and (max-width: 540px) {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
`

export default function ResultNav() {
  return (
    <Nav>
      <ReStart />
      <Logo>
        <MainLogo
          value={{
            width: 123.41,
            height: 54,
          }}
        />
      </Logo>
      <Right>
        <CopyLink />
      </Right>
    </Nav>
  )
}
