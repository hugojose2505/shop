"use client";
import styled from "styled-components";

export const Card = styled.div`
  width: 356px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  width: 356px;
  height: 270px;
  background: #f5f5f5;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.span`
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #f5a623;
  & > svg {
    margin-right: 4px;
  }
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 4px 0;
  color: #111;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  flex: 1;
  margin-bottom: 12px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 16px;
`;

export const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #27ae60;
`;

export const Stock = styled.span`
  font-size: 0.85rem;
  color: #999;
`;

export const AddButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    margin-right: 6px;
  }
  transition: background 0.2s;
  &:hover {
    background: #333;
  }
`;
