import { ReactComponent as IfIWere } from '../../assets/icons/MovCard.svg'
import { Area } from '../../shared/type'

interface LogoProps {
  value: Area
}

export default function MainLogo({ value }: LogoProps) {
  const { width, height } = value
  return <IfIWere width={width} height={height}></IfIWere>
}
