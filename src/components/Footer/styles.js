import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  background: #222;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;

  div:nth-child(2) {
    margin: 0 10px;
    a {
      color: salmon
    }
    p {
      margin: 5px 0;
      font-size: clamp(1rem, 4vw, 1.2rem);
    }
  }
`;
export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`