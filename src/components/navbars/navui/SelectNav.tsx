import styled from 'styled-components'
import { SelectCardContext } from '../../../context/SelectCardContext'
import MainLogo from '../../common/MainLogo'
import BackSpace from './BackSpace'
import { ReactComponent as BackSpaceIcon } from '../../../assets/icons/backspace.svg'
import { useContext } from 'react'

export default function SelectNav() {
  const { 뒤카드로변경 } = useContext(SelectCardContext)

  return (
    <Nav>
      <BackIcon onClick={() => 뒤카드로변경()}>
        <BackSpaceIcon />
      </BackIcon>

      <Back onClick={() => 뒤카드로변경()}>
        <BackSpace />
      </Back>
      <Logo>
        <MainLogo
          value={{
            width: 123.41,
            height: 54,
          }}
        />
      </Logo>
      <Empty> </Empty>
    </Nav>
  )
}

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`
const Logo = styled.div`
  text-align: center;
  width: 20%;
  @media screen and (max-width: 799px) {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
`
const Empty = styled.div`
  width: 40%;
  @media screen and (max-width: 799px) {
    display: none;
  }
`
const Back = styled.div`
  width: 40%;
  @media screen and (max-width: 799px) {
    display: none;
  }
`
const BackIcon = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 799px) {
    position: absolute;
    top: 3%;
    left: 7%;
  }
`
