import styled from "styled-components";

export const StyledHeader = styled.header`
  background: var(--color-grey-1);
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 5.5rem;
  width: 100%;

  img {
    max-width: 6.875rem;
    height: auto;
    object-fit: contain;
    margin-left: clamp(0.8rem, 16%, 15.6rem);
  }
`;
