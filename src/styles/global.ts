import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
	--color-color-primary: #fd377e;
	--color-color-primary-2: #e34981;
	--color-color-secondary: #03b898;
	--color-grey-4: #212529;
    --color-grey-5: #343a40;
	--color-grey-3: #868e96;
	--color-grey-2: #e9ecef;
	--color-grey-1: #f8f9fa;
    --color-white: #FFFFFF;

    --font-primary: 'Nunito', sans-serif;
    --font-secundary: 'Inter', sans-serif;
    --font-size-38: 2.375rem;
    --font-size-22: 1.375rem;
    --font-size-16: 1;
    --font-size-12: .75rem;

    --font-weight-400: 400;
    --font-weight-500: 500;
    --font-weight-600: 600; 
    --font-weight-700:700;
}
.green{
        border-left:4px solid var(--color-color-secondary);
    }
    .grey{
        border-left:4px solid var(--color-grey-2);
    }

`;
