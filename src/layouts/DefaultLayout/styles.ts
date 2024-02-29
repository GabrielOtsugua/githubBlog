import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: 0 auto 6rem;

  @media (max-width: 1280px) {
    width: 70%;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
