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
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.5);

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
  }

  > span {
    display: flex;
    align-items: end;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue500};
    font-size: 0.9rem;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: ${(props) => props.theme.blue300};
    }
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  gap: 2rem;

  > div {
    :first-child {
      color: ${(props) => props.theme.slate500};
    }

    display: flex;
    gap: 0.5rem;
  }
`;
