import styled from "styled-components";

export const StyledInput = styled.input`
  font-family: var(--font-secundary);
  width: 100%;
  height: 2.875rem;
  margin-top: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--color-grey-2);

  padding: 0 1.25rem;
  ::placeholder {
    color: var(--color-grey-3);
  }

  :focus {
    background-color: var(--color-white);
  }
`;
