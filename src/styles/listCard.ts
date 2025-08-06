import styled from "styled-components";

export const PageWrapper = styled.main`
  min-height: 100vh;
`;

export const Grid = styled.div`
  display: grid;
  gap: 24px;
  margin-bottom: 2rem;

  /* até 1023px usa auto-fill */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  /* a partir de 1024px força 3 colunas */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
