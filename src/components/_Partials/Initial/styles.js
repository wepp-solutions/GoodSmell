import styled, { keyframes } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io'

const animateArrow = keyframes`
  from { transform: translateY(-20px) }
`

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .img {
    filter: brightness(50%);
  }
`;
export const Texts = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  width: 90%;
  max-width: 900px;

  > p:nth-child(1) {
    font-size: clamp(1.7rem, 5vw, 4rem);
    font-weight: 900;
    text-transform: uppercase;
  }
  > p:nth-child(2) {
    font-size: clamp(1.2rem, 5vw, 1.8rem);
    font-weight: lighter;
  }
`
export const IconArrowDown = styled(IoIosArrowDown)`
  position: absolute;
  bottom: 2%;
  font-size: 40px;
  animation: ${animateArrow} 1s ease-in-out infinite alternate;
`