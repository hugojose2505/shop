"use client";
import { useState } from "react";
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
  const [search, setSearch] = useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = search.trim();
    if (!q) return;
    router.push(`/produto/searchProduct?search=${encodeURIComponent(q)}`);
  };

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

        <form
          onSubmit={onSubmit}
          style={{ flex: 1, maxWidth: 520 }}
        >
          <SearchContainer>
            <input
              type="text"
              placeholder="Procurando por algo específico?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              aria-label="Buscar"
              style={{ all: "unset", cursor: "pointer" }}
            >
              <FiSearch />
            </button>
          </SearchContainer>
        </form>

        <CartContainer onClick={() => router.push("/carrinho")}>
          <FiShoppingBag />
          <CartBadge>{cart.length}</CartBadge>
        </CartContainer>
      </div>
    </HeaderWrapper>
  );
}
