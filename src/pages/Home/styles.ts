import { motion } from "framer-motion";
import styled from "styled-components";

export const HomeContainer = styled.div`
  > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
    position: relative;

    &::after {
      content: "";
      position: fixed;
      top: 30rem;
      right: -15rem;
      width: 40rem;
      height: 40rem;
      background-color: ${(props) => props.theme.blue500};
      border-radius: 100%;
      filter: blur(40rem);
      z-index: -1;

      @media (max-width: 640px) {
        top: 30rem;
        right: -8rem;
        width: 20rem;
        height: 20rem;
        filter: blur(18.5rem);
      }
    }

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

export const HomeContainerError = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 2rem;
  border: 1px solid ${(props) => props.theme.blue700};
  border-radius: 1rem;
  padding: 2rem;
  margin: -3rem auto 0;

  @media (max-width: 768px) {
    margin: -1rem auto 0;
  }

  @media (max-width: 640px) {
    width: 90%;
  }

  > h2 {
    letter-spacing: 0.1rem;
    text-align: center;

    @media (max-width: 640px) {
      font-size: 1.1rem;
    }
  }

  > strong {
    color: ${(props) => props.theme.blue500};

    @media (max-width: 640px) {
      font-size: 0.8rem;
    }
  }

  > p {
    color: ${(props) => props.theme.slate500};
    line-height: 1.6rem;

    @media (max-width: 640px) {
      font-size: 0.8rem;
    }
  }
`;
