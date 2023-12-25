import styled from 'styled-components'

export default function StartLoading() {
  return (
    <Screen>
      <Ring>
        Loading...
        <span></span>
      </Ring>
    </Screen>
  )
}

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  background: #111220;
`
const Ring = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 190px;
  height: 190px;
  background: radial-gradient(
      74.22% 74.22% at 23.16% 19.47%,
      #191e55 0%,
      #121534 99.99%,
      rgba(19, 23, 77, 0.86) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 4px 5px 26px 4px rgba(99, 123, 248, 0.25);
  border: 5px solid #847e9d;
  border-radius: 50%;
  text-align: center;
  line-height: 36px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  :before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    width: 100%;
    height: 100%;
    border: 5px solid transparent;
    border-top: 5px solid #c1c4f6;
    border-right: 5px solid #c1c4f6;
    border-radius: 50%;
    animation: animateCircle 2s linear infinite;
  }
  > span {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 52%;
    height: 4px;
    background: transparent;
    transform-origin: left;
    animation: animate 2s linear infinite;
  }
  > span:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: linear-gradient(221.31deg, #ffffff -40.92%, #b0b2f3 88.79%);
    box-shadow: 0px 0px 9px 3px rgba(106, 110, 241, 0.46);
    top: -6px;
    right: -8px;
  }
  @keyframes animateCircle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
`
