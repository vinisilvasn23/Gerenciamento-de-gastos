import styled from "styled-components";

export const StyledButton = styled.button`
  background: var(--color-color-primary);
  width: 100%;
  height: 3rem;
  color: var(--color-white);
  border-radius: 0.5rem;
  font-family: var(--font-secundary);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-500);
  margin-top: 1.5625rem;

  :hover {
    background: var(--color-color-primary-2);
  }
`;
