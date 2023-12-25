import { useEffect } from 'react'
import { gsap } from 'gsap'
import styled from 'styled-components'
import { ResultType } from '../../pages/Result'

interface PosterProps {
  data: ResultType[]
}

export default function Poster({ data }: PosterProps) {
  useEffect(() => {
    let poster = document.querySelectorAll<HTMLImageElement>('.poster')

    let mm = gsap.matchMedia()

    poster.forEach((item, i) => {
      item.style.zIndex = (poster.length - i).toString()

      mm.add('(max-width: 799px)', () => {
        // mobile setup code here...
        gsap.fromTo(
          item,
          { x: -10, y: 0, rotation: 0 },
          {
            x: i * 10,
            y: i * 5,
            rotation: i * 2,
            ease: 'power1.out',
            duration: 1,
          }
        )
      })

      mm.add('(min-width: 800px)', () => {
        // desktop setup code here...
        gsap.fromTo(
          item,
          { x: -30, y: 0, rotation: 0 },
          {
            x: i * 30,
            y: i * 10,
            rotation: i * 5,
            ease: 'power1.out',
            duration: 1,
          }
        )
      })
    })
  }, [data])

  return (
    <Section>
      {data.map((item, index) => (
        <Posters
          className='poster'
          src={`/imgs/poster/${item.image[0].poster}`}
          alt={item.title}
          key={index}
        />
      ))}
    </Section>
  )
}

const Section = styled.div`
  position: relative;
  width: 45%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (min-width: 1600px) {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

const Posters = styled.img`
  position: absolute;
  width: 18.75em;
  height: 28.75em;
  @media screen and (max-width: 768px) {
    width: 180px;
    height: 280px;
  }
`
