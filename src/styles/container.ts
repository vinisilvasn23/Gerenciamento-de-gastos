import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  justify-content: center;

  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1.875rem;
  padding-left: clamp(0.5rem, 5%, 8.5rem);
  padding-right: clamp(0.5rem, 5%, 8.5rem);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
