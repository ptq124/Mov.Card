import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/common/Button'
import MainLogo from '../components/common/MainLogo'
import { OpacityEffect } from '../util/OpacityEffect'
const StartPage = styled.section`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TextMain = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  @media screen and (max-width: 799px) {
    font-size: 20px;
  }
`
const TextSub = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 30px;
  text-align: center;
  @media screen and (max-width: 799px) {
    font-size: 18px;
    margin-bottom: 10%;
  }
`
export default function Start() {
  const navigate = useNavigate()
  const handleNextPage = () => {
    navigate('/select')
  }

  useEffect(() => {
    OpacityEffect()
  })

  return (
    <StartPage>
      <MainLogo
        value={{
          width: 342,
          height: 163,
        }}
      />
      <TextMain>오늘 당신이 보아야 할 영화는?</TextMain>
      <TextSub>
        세 장의 카드를 골라,
        <br /> 오늘 시청할 영화를 추천 받으세요.
      </TextSub>
      <Button text='Start' onClick={handleNextPage} />
    </StartPage>
  )
}
