"use client";
import Image from "next/image";
import styled from "styled-components";

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  font-size: 14px;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
`;

export const ProductImage = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  max-width: 500px;
`;

export const Category = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #888;
  margin-bottom: 8px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #46ab6a;
  margin-bottom: 64px;
`;

export const Label = styled.p`
  font-size: 16px;
  color: #777;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 90px;
`;
