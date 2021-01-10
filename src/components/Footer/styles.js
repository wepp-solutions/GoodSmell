import styled from 'styled-components';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'

export const Container = styled.div`
  width: 100%;
  height: 150px;
  background: #222;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Icon = `
    font-size: 35px;
`
export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const IconInsta = styled(AiOutlineInstagram)`
    ${Icon}
`
export const IconFace = styled(AiOutlineFacebook)`
    ${Icon}
`
export const IconTwitter = styled(AiOutlineTwitter)`
    ${Icon}
`