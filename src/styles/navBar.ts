"use client";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 10;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Logo = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #5d5d6d;
`;

export const SearchContainer = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 0 40px;
  position: relative;

  input {
    width: 100%;
    padding: 12px 40px 12px 16px;
    border-radius: 8px;
    border: none;
    background: #F3F7FF;
    font-size: 14px;
  }

  svg {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    color: #fffff;
  }
`;

export const CartContainer = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    font-size: 24px;
    color: #444;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: 18px;
  right: -6px;
  background: red;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 50%;
`;
