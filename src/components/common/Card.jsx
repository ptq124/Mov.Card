import React from 'react'
import styled from 'styled-components'
//import { gsap } from 'gsap'
import { useSelectCardContext } from '../../context/SelectCardContext'

const CardStyled = styled.div`
  border-image-source: linear-gradient(
    155.93deg,
    rgba(181, 94, 195, 0.96) 0.77%,
    rgba(239, 241, 254, 0.58) 58%,
    #e3e6fb 101.02%
  );

  box-sizing: border-box;
  /* card bg color_2 */

  background: linear-gradient(
      322.85deg,
      rgba(239, 217, 253, 0.2) 2.99%,
      rgba(230, 189, 255, 0.07) 16.13%,
      rgba(255, 255, 255, 0) 29.91%
    ),
    linear-gradient(
      337.18deg,
      rgba(255, 255, 255, 0.35) -16.5%,
      rgba(255, 255, 255, 0.35) -13.9%,
      rgba(135, 129, 206, 0.162789) 100.03%,
      rgba(123, 116, 201, 0.1435) 105.56%
    );
  background-blend-mode: normal, screen;
  mix-blend-mode: normal;
  /* card effect */

  box-shadow: 0px 42px 71px 4px rgba(140, 163, 242, 0.3),
    inset 2px -11px 17px rgba(184, 167, 251, 0.28);
  backdrop-filter: blur(22px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 15px;

  width: 21.5em;
  height: 27.5em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  display: ${(props) => (props.display === 'true' ? '' : 'none')};

  transition: ease 0.6s;
  :hover {
    transform: translateY(-25px);
  }

  @media screen and (max-width: 540px) {
    width: 11em;
    height: 18em;
  }
`

const CardText = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 150%;
  color: white;
  text-align: center;
  white-space: pre-wrap;
  @media screen and (max-width: 540px) {
    font-size: 15px;
  }
`
const CardImg = styled.img.attrs(({ src }) => ({
  src: src,
}))`
  width: 12.5rem;
  height: 12.5rem;
  @media screen and (max-width: 540px) {
    width: 7rem;
    height: 7rem;
  }
`
export default function Card({ info }) {
  const { text, display, stage, id, img } = info

  const { 다음카드로변경 } = useSelectCardContext()

  return (
    <CardStyled
      className='card'
      display={display.toString()}
      onClick={() => {
        다음카드로변경(stage, id)
      }}
    >
      <CardImg src={`./imgs/gif/${img}`} />
      <CardText>{text}</CardText>
    </CardStyled>
  )
}
