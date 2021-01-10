import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin: 100px auto;
`;
export const WrapperCards = styled.div`
  width: 95%;
  height: 100%;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (min-width: 760px) {
    flex-direction: row;
  }
`;
export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;
export const WrapperTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  gap: 20px 50px;

  @media (min-width: 760px) {
    flex-direction: row;
  }
`;
export const TextsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  color: #333;


  ${(props) =>
    props.one &&
    css`
      p:nth-child(1) {
        font-size: clamp(1rem, 5vw, 1.4rem);
        color: #444;
        font-weight: 700;
        text-align: left;
      }
      p:nth-child(2) {
        font-size: clamp(1rem, 5vw, 1.4rem);
        color: #444;
        text-align: left;
      }
    `}
  ${(props) =>
    props.two &&
    css`
      p:nth-child(1) {
        font-size: clamp(1rem, 5vw, 1.4rem);
        color: #444;
        font-weight: 700;
        text-align: right;
      }
      p:nth-child(2) {
        font-size: clamp(1rem, 5vw, 1.4rem);
        color: #444;
        text-align: right;
      }
    `}
`;
export const Button = styled.button`
  padding: 15px 25px;
  background: transparent;
  border: 2px solid #333;
  color: #333;
  border-radius: 5px;
  margin-top: 20px;
  font-size: clamp(1.3rem, 5vw, 1.5rem);
  font-weight: 600;

  :hover {
    background: #333;
    color: #eee;
    cursor: pointer;
  }
`;