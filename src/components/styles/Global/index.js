import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Permanent+Marker&family=Poppins:ital,wght@0,800;1,700;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Poppins:ital,wght@0,800;1,700;1,900&display=swap');
`;

export const _Link = styled(Link)`
  text-decoration: none;
  color: #000;
  &:hover {
    color: rgba(181, 181, 181, 1);
  }
`;
