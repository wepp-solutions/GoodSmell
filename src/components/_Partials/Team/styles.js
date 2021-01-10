import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 100px auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 70px;
  text-align: center;
  align-items: center;
`;
export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    filter: brightness(80%);
  }

  p {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: clamp(1.7rem, 5vw, 3rem);
    font-weight: 900;
    text-transform: uppercase;
    margin: 10px 0;
  }
`;
export const WrapperCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px 20px;
    width: 95%;

    @media (min-width: 850px) {
        flex-direction: row;
    }
`
export const Card = styled.div`
    color: #333;
    width: min(400px, 100%);
    height: 100%;
    
    display: flex;
    text-align: left;
    flex-direction: column;
    gap: 10px;

    > p:nth-child(1) {
    font-size: clamp(1.2rem, 5vw, 1.3rem);
    font-weight: 900;
    text-transform: uppercase;
  }
  > p:nth-child(2) {
    font-size: clamp(1rem, 5vw, 1.2rem);
    font-weight: normal;
    color: #555;
  }
`