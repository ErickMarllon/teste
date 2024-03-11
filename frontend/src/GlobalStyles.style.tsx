import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
html,
body,
div,
span,
p,
a,
h1,
h2,
ul,
li,
img,
svg{
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}
body {
  background-color: #111827;
}

a {
  text-decoration: none;
}
`;
