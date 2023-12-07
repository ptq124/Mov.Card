import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getResultData } from '../apis/result'
import styled from 'styled-components'
import { gsap } from 'gsap'
import Poster from '../components/ui/Poster'
import ResultInfo from '../components/ui/ResultInfo'
import MovieChange from '../components/ui/MovieChange'
import NavArrow from '../components/ui/NavArrow'
import Nav from '../components/navbars/Nav'

const ResultPage = styled.section`
  height: 65%;
  width: 70%;
  margin: auto;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 1600px) {
    width: 75%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 85%;
  }
`

const ChangeBtn = styled.div`
  height: 60%;
  width: 15%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Arrow = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 800px) {
    display: none;
  }
`
export default function Result() {
  const { key } = useParams()
  const [data, setData] = useState([])
  const [background, setBg] = useState([])

  useEffect(() => {
    getResultData(key) //
      .then((data) => {
        setData([...data])
        setBg([...data.map((d) => d.image[0].background)])
      }) //
  }, [key])

  useEffect(() => {
    const main = document.getElementsByTagName('main')
    gsap.fromTo(
      main,
      { opacity: 0.8 },
      {
        opacity: 1,
        duration: 0.1,
        ease: 'power1.out',
        backgroundSize: 'cover',
        background: `url(/imgs/background/${background[0]}) #111220`,
      }
    )
  }, [data, background])

  const 결과데이터조작 = (motion) => {
    if (motion === 'up') {
      data.push(data.shift())
      background.push(background.shift())
    } else {
      data.unshift(data.pop())
      background.unshift(background.pop())
    }
    setData([...data])
    setBg([...background])
  }

  return (
    <>
      <Arrow>
        <NavArrow 결과데이터조작={결과데이터조작} />
      </Arrow>
      <Nav />
      <ResultPage>
        <Poster data={data} />
        {data.map((items, index) => (
          <ResultInfo data={items} index={index} key={index} />
        ))}
        <ChangeBtn>
          <MovieChange 결과데이터조작={결과데이터조작} />
        </ChangeBtn>
      </ResultPage>
    </>
  )
}
