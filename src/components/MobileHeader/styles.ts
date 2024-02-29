import styled from "styled-components";

export const MobileHeaderBox = styled.header`
  display: none;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 640px) {
    display: flex;
  }

  h1 {
    color: ${(props) => props.theme.blue700};
    font-size: 1.2rem;
    position: relative;
    letter-spacing: 0.1rem;

    &:before {
      content: "";
      position: absolute;
      top: -2rem;
      left: -2rem;
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
      background-color: ${(props) => props.theme.blue500};
      filter: blur(3rem);
      z-index: -1;
    }
  }
`;
