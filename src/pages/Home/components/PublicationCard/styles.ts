import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme.slate900};
  padding: 2rem;
  border: 1px solid transparent;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.5s;
  /* box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.2); */
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);

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
      width: 65%;

      @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.6rem;
      }
    }

    > span {
      width: 35%;
      text-align: end;
      font-size: 0.8rem;
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
