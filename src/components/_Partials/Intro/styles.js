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
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const Footer = styled.div`
  width: 100%;

  div {
    display: flex;
    width: 100%;
    margin-top: 2px;
    gap: 5px;
    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
`;
export const TextsHeader = styled.div`
  color: #333;
  > p:nth-child(1) {
    font-size: clamp(1.7rem, 5vw, 2.2rem);
    font-weight: 900;
    text-transform: capitalize;
    margin: 10px 0;
  }
  > p:nth-child(2) {
    font-size: clamp(1rem, 5vw, 1.2rem);
    font-weight: 300;
    margin: 10px auto;
    max-width: 700px;
  }
`;
export const ImageBox = styled.div`
  position: relative;
  width: 150px;
  height: 150px;

  .img {
    border-radius: 100px;
  }
`;
export const Card = styled.div`
  position: relative;
  width: min(400px, 100%);
  height: 400px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
