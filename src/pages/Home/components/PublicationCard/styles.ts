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
    }

    > span {
      width: 4.5rem;
      text-align: end;
      font-size: 0.9rem;
      color: ${(props) => props.theme.slate500};
    }
  }

  > p {
    line-height: 1.6rem;
    color: ${(props) => props.theme.slate500};
  }
`;
