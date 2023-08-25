import styled, {css} from "styled-components";

export const HeadlineStyles = css`
    font-family: var(--font-primary);
    font-weight: var(--font-weight-700);    
    color: var(--color--grey-4);
    font-size: var(--font-size-16);
`

export const StyledLabel = styled.label`
    ${HeadlineStyles};   
    font-weight: var(--font-weight-400);
    font-size: var(--font-size-16);
    font-family: var(--font-secundary);
    margin-top: 0.625rem;
`
export const StyledHeadline1 = styled.h1`
    ${HeadlineStyles};
    font-size: var(--font-size-22);
    margin-top: 2rem;
`
export const StyledHeadline2 = styled.h2`
    ${HeadlineStyles};
`

export const StyledParagraph = styled.p`
    ${HeadlineStyles};
    color: var(--color-grey-3);
    font-weight: var(--font-weight-400);
    font-size: var(--font-size-12);
`
export const StyledSpan = styled.span`
    ${HeadlineStyles};
    color: var(--color-grey-3);
    font-weight: var(--font-weight-400);
    font-size: var(--font-size-12);
    font-family: var(--font-secundary);
    margin-top: 0.3125rem;
`