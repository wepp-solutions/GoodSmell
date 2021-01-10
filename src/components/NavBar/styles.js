import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 5%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 28px;
    font-weight: 900;
    padding-bottom: 2px;
    border-bottom: 2px solid #eee;
    text-transform: uppercase;
  }
`;