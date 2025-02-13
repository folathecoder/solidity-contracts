import styled, { css } from 'styled-components';

export const CollectorContainer = styled.section`
  max-width: var(--max-container);
  margin: var(--center-container);

  h2 {
    padding: 20px;
  }
`;

export const CollectorSlider = styled.div`
  max-width: var(--max-container);
  overflow-y: hidden;
  overflow-x: auto;
  margin-top: 20px;
  padding-left: 20px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > * {
    display: flex;
    margin-right: 20px;
  }
`;

export const Collector = styled.div`
  width: 154px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const CollectorImage = styled.div`
  width: 154px;
  height: 154px;
  border-radius: 100%;
  background-image: var(--gradient-200);
  padding: 2px;

  img {
    border-radius: 100%;
  }
`;

export const CollectorDetail = styled.div`
  margin-top: 10px;

  span {
    margin-right: 7px;
  }

  i {
    color: #3498db;
  }
`;
