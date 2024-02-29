import styled from "styled-components";

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: ${(props) => props.theme.slate800};
  border-radius: 1rem;
  padding: 2rem;
  margin: -7rem 0 6rem;
  position: relative;
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.2);

  @media (max-width: 1280px) {
    margin: -4.5rem 0 6rem;
  }

  @media (max-width: 1024px) {
    margin: -4rem 0 6rem;
  }

  @media (max-width: 768px) {
    margin: -3rem 0 4rem;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 2rem 0;
  }

  > figure {
    border-radius: 1rem;

    > img {
      border-radius: 1rem;
      width: 100%;
    }
  }

  > main {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > p {
      line-height: 1.7rem;
      color: ${(props) => props.theme.slate400};

      @media (max-width: 768px) {
        font-size: 0.9rem;
        line-height: 1.4rem;
      }

      @media (max-width: 640px) {
        font-size: 0.8rem;
        line-height: 1.2rem;
      }
    }
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    color: ${(props) => props.theme.slate100};
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }

    @media (max-width: 640px) {
      font-size: 1rem;
    }
  }

  > span {
    display: flex;
    align-items: end;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue500};
    font-size: 0.9rem;
    cursor: pointer;
    transition: 0.5s;

    @media (max-width: 640px) {
      font-size: 0.8rem;
    }

    &:hover {
      color: ${(props) => props.theme.blue300};
    }
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  > div {
    display: flex;
    align-items: end;
    gap: 0.5rem;

    @media (max-width: 768px) {
      gap: 0.3rem;
      font-size: 0.9rem;
    }

    @media (max-width: 640px) {
      font-size: 0.7rem;
    }

    :first-child {
      color: ${(props) => props.theme.slate500};

      @media (max-width: 640px) {
        /* width: 1rem; */
      }
    }
  }
`;
