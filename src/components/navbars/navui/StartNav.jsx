import React from 'react'
import CopyLink from './CopyLink'
import styled from 'styled-components'

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: auto;
  width: 17rem;

  @media screen and (max-width: 540px) {
    display: none;
  }
`

export default function StartNav() {
  return (
    <Nav>
      <CopyLink />
    </Nav>
  )
}
