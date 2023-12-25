import styled, { keyframes } from 'styled-components'

export default function Cricle1() {
  return (
    <>
      <Box1></Box1>
      <Box2></Box2>
      <Box3></Box3>
      <Box4></Box4>
      <Box5></Box5>
      <Box6></Box6>
      <Box7></Box7>
      <Box8></Box8>
      <Box9></Box9>
      <Box10></Box10>
      <Box11></Box11>
      <Box12></Box12>
    </>
  )
}

const rotate1 = keyframes`
  0%{
    background: transparent;
  }
  50%{
    background: rgba(255, 255, 255, 0.6);
  }
  100%{
    background: transparent;
  }
`
const rotate2 = keyframes`
  0%{
    background: #ffffff;
    box-shadow: 0px 4px 4px 31px rgba(99, 123, 248, 0.25);
    filter: blur(14.5px);
  }
  50%{
    background: transparent;
  }
  100%{
    background: #d9d9d9;
    filter: blur(14.5px);
  }
`
const Box1 = styled.div`
  position: absolute;

  width: 34px;
  height: 34px;
  left: 195px;
  top: 244px;

  border-radius: 100%;

  animation: ${rotate1} 7s linear infinite;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Box2 = styled.div`
  position: absolute;
  border-radius: 100%;

  width: 26px;
  height: 26px;
  left: 225px;
  top: 239px;

  animation: ${rotate2} 5s linear infinite;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Box3 = styled.div`
  position: absolute;
  border-radius: 100%;

  width: 88px;
  height: 88px;
  left: 194px;
  top: 619px;

  animation: ${rotate2} 7s linear infinite;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Box4 = styled.div`
  position: absolute;
  border-radius: 100%;

  width: 70px;
  height: 70px;
  left: 247px;
  top: 584px;

  animation: ${rotate1} 6s linear infinite;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Box5 = styled.div`
  position: absolute;
  border-radius: 100%;

  width: 18px;
  height: 18px;

  left: 583px;
  top: 547px;

  animation: ${rotate2} 8s linear infinite;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Box6 = styled.div`
  position: absolute;
  border-radius: 100%;

  width: 24px;
  height: 24px;
  left: 618px;
  top: 596px;

  animation: ${rotate2} 5s linear infinite;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Box7 = styled.div`
  position: absolute;
  border-radius: 100%;

  width: 12.33px;
  height: 12.33px;
  left: 1206.63px;
  top: 188.05px;

  animation: ${rotate2} 5s linear infinite;
`
const Box8 = styled.div`
  position: absolute;
  border-radius: 100%;

  width: 20px;
  height: 20px;
  left: 1351px;
  top: 361px;

  animation: ${rotate1} 5s linear infinite;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Box9 = styled.div`
  position: absolute;
  border-radius: 100%;

  width: 26px;
  height: 26px;
  left: 1643px;
  top: 213px;

  animation: ${rotate2} 7s linear infinite;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Box10 = styled.div`
  position: absolute;
  border-radius: 100%;

  width: 26px;
  height: 26px;
  left: 1643px;
  top: 213px;

  animation: ${rotate2} 5s linear infinite;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Box11 = styled.div`
  position: absolute;
  border-radius: 100%;

  width: 16px;
  height: 16px;
  left: 1579px;
  top: 711px;

  animation: ${rotate1} 6s linear infinite;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Box12 = styled.div`
  position: absolute;
  border-radius: 100%;

  width: 46px;
  height: 46px;
  left: 1594px;
  top: 719px;

  animation: ${rotate2} 7s linear infinite;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
