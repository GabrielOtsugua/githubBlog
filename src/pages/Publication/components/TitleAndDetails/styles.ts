import { motion } from "framer-motion";
import styled from "styled-components";

export const TitleAndDetailsBox = styled(motion.header)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background-color: ${(props) => props.theme.slate800};
  padding: 2rem;
  border-radius: 1rem;
  margin: -7rem 0 3rem;
  position: relative;
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.2);

  @media (max-width: 1280px) {
    margin: -5rem 0 3rem;
  }

  @media (max-width: 1024px) {
    margin: -4rem 0 3rem;
  }

  @media (max-width: 768px) {
    margin: -3rem 0 3rem;
  }

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

      @media (max-width: 640px) {
        font-size: 0.8rem;
      }

      &:hover {
        color: ${(props) => props.theme.blue300};
      }
    }
  }

  > h1 {
    font-size: 1.8rem;

    @media (max-width: 640px) {
      font-size: 1.3rem;
    }
  }

  > div {
    display: flex;
    gap: 2rem;

    @media (max-width: 640px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    > span {
      display: flex;
      gap: 0.5rem;
      color: ${(props) => props.theme.slate500};

      @media (max-width: 640px) {
        font-size: 0.9rem;
      }
    }
  }
`;
