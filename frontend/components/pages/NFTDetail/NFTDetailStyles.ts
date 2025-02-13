import styled from 'styled-components';

type Props = {
  mobile?: boolean;
};

export const DetailContainer = styled.section`
  max-width: var(--max-container);
  margin: var(--center-container);
  min-height: 500px;
  padding: 20px;

  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1000px) {
      flex-direction: row;
    }

    & > * {
      flex: 1;
    }
  }

  @media screen and (min-width: 1000px) {
    padding: 50px 20px;
  }
`;

export const DetailLeft = styled.div`
  width: calc(100vw - 40px);

  @media screen and (min-width: 499px) {
    width: 450px;
  }

  @media screen and (min-width: 1000px) {
    padding-right: 40px;
  }
`;

export const DetailImage = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  border-radius: 8px;

  @media screen and (min-width: 499px) {
    height: 500px;
  }

  img {
    border-radius: 8px;
  }
`;

export const DetailExplorer = styled.div<Props>`
  display: ${(Props) => (Props.mobile ? 'none' : '')};

  @media screen and (min-width: 1000px) {
    display: ${(Props) => (Props.mobile ? 'block' : 'none')};
  }
`;

export const ExplorerButton = styled.button`
  background-color: var(--color-bg-200);
  color: var(--color-accent-200);
  display: flex;
  width: 100%;
  height: 60px;
  margin: 20px 0px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

export const DetailRight = styled.div`
  max-width: 600px;

  @media screen and (min-width: 1000px) {
    padding-left: 40px;
  }
`;

export const DetailOption = styled.div<Props>`
  display: ${(Props) => (Props.mobile ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(Props) => (Props.mobile ? '25px' : '')};

  @media screen and (min-width: 1000px) {
    display: ${(Props) => (Props.mobile ? 'none' : 'flex')};
  }

  span {
    margin-right: 10px;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  i {
    font-size: 25px;
    color: var(--color-accent-100);
  }
`;

export const DetailContent = styled.div`
  h1 {
    font-size: 30px;
    line-height: 35px;
    margin: 40px 0px 10px 0px;

    @media screen and (min-width: 1000px) {
      margin: 20px 0px 10px 0px;
    }
  }

  h2 {
    font-size: 20px;
    line-height: 25px;
    font-family: var(--font-pry-100);
    opacity: 0.8;
  }

  p {
    margin: 10px 0px 20px 0px;
  }
`;

export const DetailPrice = styled.div`
  & > * {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    border: none;
    color: var(--color-accent-200);
    height: 30px;
    padding: 20px;
    border-radius: 5px;
    font-weight: 500;
    display: flex;
    align-items: center;
    line-height: 0px;
    cursor: pointer;
    transition: var(--transition);
    background-color: #ee00de;
    background-image: linear-gradient(43deg, #ee00de 0%, #4158d0 2%);

    span {
      margin-right: 5px;
    }
  }
`;

export const Creator = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: center;

  & > * {
    display: flex;

    p {
      margin-left: 10px;
      margin-top: -2px;
      font-size: 15px;
      opacity: 0.5;
    }

    h4 {
      margin-left: 10px;
      font-size: 12px;
    }
  }
`;

export const CreatorImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-image: var(--gradient-200);
  padding: 1px;

  img {
    border-radius: 100%;
  }
`;

export const DetailInfo = styled.div`
  margin-bottom: 20px;

  h3 {
    padding: 15px 0px;
    border-bottom: 1px solid var(--color-bg-200);
  }
`;

export const DetailOwner = styled.div`
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  border-bottom: 1px solid var(--color-bg-200);
  cursor: pointer;

  & > * {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h5 {
    opacity: 0.8;
  }
`;

export const Owner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & > * {
    display: flex;

    p {
      margin-top: 0px;
      font-size: 15px;
      opacity: 0.5;
    }

    h4 {
      font-size: 12px;
    }
  }
`;

export const OwnerImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-image: var(--gradient-200);
  padding: 1px;
  margin-right: 10px;

  img {
    border-radius: 100%;
  }
`;
