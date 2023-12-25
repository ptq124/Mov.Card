import { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as CheckIcon } from '../../../assets/icons/check.svg'

export default function CopyLink() {
  const [isCopied, toggleCopied] = useState(false)
  const [flag, setFlag] = useState<number>(1)
  const handleCopy = () => {
    navigator.clipboard.writeText(
      'https://serene-heliotrope-9a8a7f.netlify.app/'
    )
    setFlag(flag - 1)
    if (flag > 0) {
      toggleCopied(!isCopied)
      setTimeout(() => {
        toggleCopied(isCopied)
        setFlag(1)
      }, 1300)
    }
  }
  return (
    <CopyBtn onClick={handleCopy} copy={isCopied}>
      {isCopied && (
        <>
          <CheckIcon />
          Copied!
        </>
      )}
      {!isCopied && <>Copy Link</>}
    </CopyBtn>
  )
}

interface CopyBtnProps {
  copy: boolean
}

const CopyBtn = styled.button<CopyBtnProps>`
  width: 214px;
  height: 61px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: transparent;
  color: white;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.copy && '#70E5D0'};
  border: ${(props) => props.copy && '1px solid #70E5D0'};
`
