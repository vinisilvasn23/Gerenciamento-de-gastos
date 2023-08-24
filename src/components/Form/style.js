import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-2);
  margin-bottom: 1.25rem;
  padding: 2rem 1.25rem;
  height: 27.125rem;
  width: 100%;

  @media (min-width: 640px) {
    max-width: 22.1875rem;
  }
`;
