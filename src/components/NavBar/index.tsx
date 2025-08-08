"use client";
import { useState, useEffect } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import {
  CartBadge,
  CartContainer,
  HeaderWrapper,
  Logo,
  SearchContainer,
} from "@/styles/navBar";
import { useRouter } from "next/navigation";
import { useCarrinhoStore } from "@/hooks/useCarrinhoStore";

export function NavBar() {
  const router = useRouter();
  const { cart } = useCarrinhoStore();
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
        <Logo onClick={() => router.push("/")}>InsanyShop</Logo>

        <SearchContainer>
          <input type="text" placeholder="Procurando por algo específico?" />
          <FiSearch />
        </SearchContainer>

        <CartContainer onClick={() => router.push("/carrinho")}>
          <FiShoppingBag />
          <CartBadge>{cart.length}</CartBadge>
        </CartContainer>
      </div>
    </HeaderWrapper>
  );
}
