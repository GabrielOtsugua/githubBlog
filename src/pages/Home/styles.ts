import styled from "styled-components";

export const HomeContainer = styled.div`
  > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;

    > label {
      display: flex;
      justify-content: space-between;

      > h3 {
        font-weight: 500;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }

      > p {
        color: ${(props) => props.theme.slate400};

        @media (max-width: 768px) {
          font-size: 0.8rem;
        }
      }
    }

    input {
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid ${(props) => props.theme.slate700};
      background-color: transparent;
      color: ${(props) => props.theme.slate100};
      font-size: 1rem;
      transition: 0.5s;
      outline: none;

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }

      &::placeholder {
        color: ${(props) => props.theme.slate400};
      }

      &:focus {
        border: 1px solid ${(props) => props.theme.blue700};
      }
    }
  }

  > main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
`;
