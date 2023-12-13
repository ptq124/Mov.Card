import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/common/Button'
import MainLogo from '../components/common/MainLogo'
import StartLoading from '../components/ui/StartLoading'
import 시작배경 from '../assets/bg/시작배경화면.webp'

export default function Start() {
  const navigate = useNavigate()
  const handleNextPage = () => {
    navigate('/select')
  }

  const [imgLoading, setImgLoading] = useState(true)
  const [imgUrl, setImgUrl] = useState('')

  const preLoadImage = useCallback(() => {
    const img = new Image()
    img.src = 시작배경
    setImgUrl(시작배경)
  }, [])

  useEffect(() => {
    preLoadImage()
    setTimeout(() => {
      setImgLoading(false)
    }, 2000)
  }, [preLoadImage])

  return (
    <StartPage imgUrl={imgUrl}>
      {imgLoading ? (
        <StartLoading />
      ) : (
        <>
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
        </>
      )}
    </StartPage>
  )
}

const StartPage = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
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
