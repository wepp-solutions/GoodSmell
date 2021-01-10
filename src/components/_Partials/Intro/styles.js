import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 100px auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  text-align: center;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  height: 40%;
  padding: 5% 0;
  flex-direction: column;
  gap: 20px;

  > p:nth-child(1) {
    font-size: clamp(1.7rem, 5vw, 2.4rem);
    font-weight: 600;
    color: #444;
    max-width: 300px;
    margin: 0 auto;
    padding-bottom: 10px;
    border-bottom: 2px solid #333;
  }
  > p:nth-child(2) {
    font-size: clamp(1rem, 5vw, 1.5rem);
    font-weight: lighter;
    color: #666;
    max-width: 800px;
  }
`
export const Footer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  .img {
    filter: brightness(50%);
  }
`
export const Texts = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;


  > p:nth-child(1) {
    font-size: clamp(1.7rem, 5vw, 2.4rem);
    font-weight: 900;
    text-transform: uppercase;
    margin: 10px 0;
  }
  > p:nth-child(2) {
    font-size: clamp(1rem, 5vw, 1.5rem);
    font-weight: 300;
    margin: 10px auto;
    max-width: 700px;
  }
  button {
    padding: 15px 25px;
    background: transparent;
    border: 2px solid #eee;
    color: #eee;
    border-radius: 25px;
    margin-top: 30px;
    font-size: 20px;
    font-weight: 600;

    :hover {
      background: #eee;
      color: #333;
      cursor: pointer;
    }
  }
`