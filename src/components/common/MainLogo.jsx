import React from 'react'
import { ReactComponent as IfIWere } from './MovCard.svg'

export default function MainLogo({ value }) {
  const { width, height } = value
  return <IfIWere width={width} height={height}></IfIWere>
}
