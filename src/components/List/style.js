import styled from "styled-components";

export const StyledContainerList = styled.div`
  display: flex;
  flex-direction: column;
  width: minmax(0rem, 35rem);
  margin: 1.25rem 0;
  overflow-y: auto;
  height: 65vh;
  position: relative;

  > h2 {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: var(--color-white);
  }

  @media (min-width: 640px) {
    margin: 0 1rem;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
