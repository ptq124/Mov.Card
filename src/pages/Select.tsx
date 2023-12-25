import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import SelectCard from '../components/ui/SelectCard'
import Nav from '../components/navbars/Nav'
import StartLoading from '../components/ui/StartLoading'
import 선택배경 from '../assets/bg/선택배경화면.webp'
import 개인 from '../assets/gif/개인.gif'
import 밝은 from '../assets/gif/밝은.gif'
import 빠른 from '../assets/gif/빠른.gif'
import 앤틱 from '../assets/gif/앤틱.gif'
import 어둡 from '../assets/gif/어둡.gif'
import 잔잔 from '../assets/gif/잔잔.gif'
import 집단 from '../assets/gif/집단.gif'
import 현대 from '../assets/gif/현대.gif'

export default function Select() {
  const [imgLoading, setImgLoading] = useState(true)

  const gif: string[] = useMemo(
    () => [앤틱, 현대, 밝은, 어둡, 개인, 집단, 잔잔, 빠른],
    []
  )

  const preLoadImage = useCallback(() => {
    return new Promise<void>((resolve) => {
      const img = new Image()
      img.onload = () => {
        resolve()
      }
      img.src = 선택배경
    })
  }, [])

  const preLoadGif = useCallback(() => {
    const loadImg: Promise<void>[] = gif.map((url: string) => {
      return new Promise<void>((resolve) => {
        const img = new Image()
        img.onload = () => {
          resolve()
        }
        img.src = url
      })
    })

    return Promise.all(loadImg)
  }, [gif])

  useEffect(() => {
    const loadData = async () => {
      await preLoadImage()
      await preLoadGif()
    }

    loadData()

    setTimeout(() => {
      setImgLoading(false)
    }, 2000)
  }, [preLoadImage, preLoadGif])

  return (
    <SelectPage>
      {imgLoading ? (
        <StartLoading />
      ) : (
        <>
          <Nav />
          <Text> 둘중 더 원하는 카드를 클릭 하세요.</Text>
          <SelectCard gif={gif} />
        </>
      )}
    </SelectPage>
  )
}

const SelectPage = styled.section`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-image: url(${선택배경});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 799px) {
    justify-content: space-evenly;
  }
`
const Text = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 29.83px;
  @media screen and (max-width: 799px) {
    font-size: 20px;
  }
`
