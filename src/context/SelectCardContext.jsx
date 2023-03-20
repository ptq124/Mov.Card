import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSelectCard } from '../apis/selectcard'
import { backCard, nextCard } from '../util/SelectCardUtil'
import { gsap } from 'gsap'

const SelectCardContext = createContext()

export function SelectCardContextProvider({ children }) {
  const [data, setData] = useState([])
  const [result, setResult] = useState([])
  useEffect(() => {
    getSelectCard() //
      .then((data) => {
        setData(data)
      })
  }, [])

  const navigate = useNavigate()

  const 내려가는카드모션 = (cnt) => {
    const card1 = document.getElementsByClassName('card')[cnt]
    const card2 = document.getElementsByClassName('card')[cnt + 1]

    gsap.to(card1, {
      y: 600,
      duration: 1,
    })
    gsap.to(card2, {
      y: 600,
      duration: 1,
    })
  }

  const 내려간카드초기화 = (cnt) => {
    const card1 = document.getElementsByClassName('card')[cnt]
    const card2 = document.getElementsByClassName('card')[cnt + 1]

    gsap.to(card1, {
      y: 0,
    })
    gsap.to(card2, {
      y: 0,
    })
  }

  const 올라가는카드모션 = (cnt) => {
    if (cnt !== 6) {
      const card1 = document.getElementsByClassName('card')[cnt + 2]
      const card2 = document.getElementsByClassName('card')[cnt + 3]
      gsap.fromTo(card1, { y: 600 }, { y: 0 })
      gsap.fromTo(card2, { y: 600 }, { y: 0 })
    }
  }

  const 다음카드로변경 = (stage, id) => {
    let cnt = 0
    if (stage === 0) cnt = 0
    if (stage === 1) cnt = 2
    if (stage === 2) cnt = 4
    if (stage === 3) cnt = 6

    내려가는카드모션(cnt)

    setTimeout(() => {
      내려간카드초기화(cnt)
      const newData = nextCard(data, stage)
      setData([...newData])
      결과값저장(id)
    }, 1200)

    올라가는카드모션(cnt)
  }

  const 뒤카드로변경 = () => {
    if (!result.length) {
      navigate('/')
    } else {
      const newData = backCard(data)
      setData([...newData])
      결과값제거()
    }
  }

  const 결과값저장 = (id) => {
    result.push(id)
    setResult([...result])
    if (result.length === 4) {
      navigate(`/result/${result.join('')}`)
    }
  }

  const 결과값제거 = () => {
    result.pop()
    setResult([...result])
  }

  return (
    <SelectCardContext.Provider value={{ data, 다음카드로변경, 뒤카드로변경 }}>
      {children}
    </SelectCardContext.Provider>
  )
}

export function useSelectCardContext() {
  return useContext(SelectCardContext)
}
