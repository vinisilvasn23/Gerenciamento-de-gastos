import styled from "styled-components";

export const StyledSummary = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.25rem;
  height: 6rem;
  width: 100%;
  border: 1px solid var(--color-grey-2);
  grid-row: 2;

  h2 {
    width: 50%;
  }

  span {
    color: var(--color-color-primary);
    width: 50%;
    text-align: end;
    font-size: var(--font-size-16);
    font-weight: var(--font-weight-700);
    font-family: var(--font-primary);
  }

  @media (min-width: 640px) {
    max-width: 22.1875rem;
  }
`;
