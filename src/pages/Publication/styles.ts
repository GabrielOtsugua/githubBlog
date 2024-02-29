import styled from "styled-components";

export const PublicationContainer = styled.div`
  main {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > p {
      line-height: 1.8rem;
      color: ${(props) => props.theme.slate400};
    }

    > strong {
      font-weight: 500;
      color: ${(props) => props.theme.blue500};
    }

    > code {
      background-color: ${(props) => props.theme.slate800};
      padding: 1rem;
      border-radius: 0.5rem;

      > p {
        line-height: 1.6rem;
        font-size: 1rem;
      }
    }
  }
`;
