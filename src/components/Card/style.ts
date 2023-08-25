import styled from "styled-components";

export const StyledCard = styled.li`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.25rem;
  background-color: var(--color-grey-1);
  padding: 0.875rem;
  margin-top: 1rem;

  .content__text {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  button {
    width: 3.125rem;
    height: 1.25rem;
    background-color: var(--color-grey-2);
    border-radius: 0.125rem;
    color: var(--color-grey-4);
    margin-top: 0.575rem;
    font-size: var(--font-size-12);
  }
  button:hover {
    background-color: var(--color-grey-5);
    color: var(--color-grey-1);
  }
  :hover {
    background-color: var(--color-white);
    box-shadow: 4px 2px 4px 2px rgba(0, 0, 0, 0.1);
  }

  .content__value{
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  @media (min-width: 640px) {
    flex-direction: row;

    .content__value{
    align-items: end;
    margin-top: 0;
  }
  }
`;
