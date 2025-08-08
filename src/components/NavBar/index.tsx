"use client";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import {
  CartBadge,
  CartContainer,
  HeaderWrapper,
  Logo,
  SearchContainer,
} from "@/styles/navBar";

export function NavBar() {
  return (
    <HeaderWrapper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
          width: "100%",
          maxWidth: "1200px",
          justifyContent: "space-between",
        }}
      >
        <Logo onClick={() => window.location.href = "/"}>InsanyShop</Logo>
        <SearchContainer>
          <input type="text" placeholder="Procurando por algo específico?" />
          <FiSearch />
        </SearchContainer>
        <CartContainer>
          <FiShoppingBag />
          <CartBadge>2</CartBadge>
        </CartContainer>
      </div>
    </HeaderWrapper>
  );
}
