import styled from "styled-components";

export const PublicationContainer = styled.div`
  main {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > p {
      line-height: 1.6rem;
      color: ${(props) => props.theme.slate400};
    }
  }
`;
