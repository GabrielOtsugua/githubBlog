import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme.slate800};
  padding: 2rem;
  border: 1px solid transparent;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    border: 1px solid ${(props) => props.theme.blue700};
  }

  > header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    > h3 {
      line-height: 1.8rem;
      color: ${(props) => props.theme.slate300};

      @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.6rem;
      }
    }

    > span {
      width: 4.5rem;
      text-align: end;
      font-size: 0.9rem;
      color: ${(props) => props.theme.slate500};

      @media (max-width: 768px) {
        width: 4.8rem;
      }
    }
  }

  > p {
    line-height: 1.6rem;
    color: ${(props) => props.theme.slate500};

    @media (max-width: 768px) {
      font-size: 0.8rem;
      line-height: 1.5rem;
    }
  }
`;
