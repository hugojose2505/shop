"use client";
import styled from "styled-components";

export const CarrinhoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: space-between;
  padding: 2rem 0;
  flex-wrap: wrap;
`;

export const CarrinhoContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const CartHeader = styled.div`
  h1 {
    font-size: 1.5rem;
  }

  p {
    margin-top: 0.5rem;
    color: #555;
    strong {
      font-weight: bold;
      color: #000;
    }
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductItem = styled.div`
  display: flex;
  gap: 1rem;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  align-items: flex-start;
  position: relative;
`;

export const ProductImage = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin: 0;
  }

  p {
    margin: 0.5rem 0;
    color: #555;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const QuantitySelector = styled.div`
  select {
    padding: 0.4rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: red;
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;

export const SummarySection = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const SummaryBox = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  height: 100%;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  p {
    margin: 0;
  }
`;

export const TotalRow = styled(SummaryRow)`
  border-top: 1px solid #ddd;
  padding-top: 1rem;
  margin-top: 1rem;
`;

export const CheckoutButton = styled.button`
  background-color: #2ca342;
  color: white;
  border: none;
  border-radius: 6px;
  width: 100%;
  padding: 0.75rem;
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #228f37;
  }
`;

export const Links = styled.div`
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
