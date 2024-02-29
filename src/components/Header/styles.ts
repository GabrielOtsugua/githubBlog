import styled from "styled-components";

export const HeaderBox = styled.header`
  display: flex;
  width: 100%;

  @media (max-width: 640px) {
    display: none;
  }

  > figure {
    width: 100%;

    > img {
      width: 100%;
    }
  }
`;
