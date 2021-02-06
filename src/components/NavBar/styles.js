import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 5%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > a {
    color: #fff;
    font-size: 23px;
    font-weight: 700;
    text-transform: capitalize;

    :hover {
      border-bottom: 2px solid #fff;
    }
  }

  > p:nth-child(2) {
    font-size: clamp(1.4rem, 5vw, 2rem);
    font-weight: 900;
    padding-bottom: 2px;
    border-bottom: 2px solid #eee;
    text-transform: uppercase;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }

  @media (max-width: 520px) {
    > a {
      display: none;
    }
    > div {
      
    }
  }
`;