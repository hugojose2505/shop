"use client";
import styled from "styled-components";

export default function Home() {
  return (
    <MainPage>
      <h1>Welcome to Insany Shop</h1>
    </MainPage>
  );
}

const MainPage = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f3f7ff;
  min-height: 100vh;
`;
