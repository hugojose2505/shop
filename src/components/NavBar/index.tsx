"use client";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import {
  CartBadge,
  CartContainer,
  HeaderWrapper,
  Logo,
  SearchContainer,
} from "@/styles/navBar";
import { useRouter } from "next/navigation";

export function NavBar() {
  const router = useRouter();
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
          <CartBadge>2</CartBadge>
        </CartContainer>
      </div>
    </HeaderWrapper>
  );
}
