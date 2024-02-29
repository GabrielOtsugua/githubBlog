import styled from "styled-components";

export const TitleAndDetailsBox = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background-color: ${(props) => props.theme.slate800};
  padding: 2rem;
  border-radius: 1rem;
  margin: -7rem 0 3rem;
  position: relative;
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.5);

  > nav {
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      align-items: end;
      gap: 0.5rem;
      font-size: 0.9rem;
      color: ${(props) => props.theme.blue500};
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.blue300};
      }
    }
  }

  > h1 {
    font-size: 1.8rem;
  }

  > div {
    display: flex;
    gap: 2rem;

    > span {
      display: flex;
      gap: 0.5rem;
      color: ${(props) => props.theme.slate500};
    }
  }
`;
