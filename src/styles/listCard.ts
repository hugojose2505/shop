"use client";
import styled from "styled-components";

export const PageWrapper = styled.main`
  min-height: 100vh;
`;

export const Grid = styled.div`
  display: grid;
  gap: 24px;
  margin-bottom: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const GridCategory = styled.div`
  display: grid;
  gap: 24px;
  margin-bottom: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const CardCategory = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4px;
  background-color: #ffffff;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 16px;
`;
