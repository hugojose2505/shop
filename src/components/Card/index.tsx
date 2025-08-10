"use client";
import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import {
  AddButton,
  Card,
  Category,
  Description,
  Footer,
  Header,
  Image,
  ImageWrapper,
  Price,
  Rating,
  Stock,
  Title,
} from "@/styles/card";
import { Content } from "@/styles/layout";
import { Product } from "@/types/product";
import { useCarrinhoStore } from "@/hooks/useCarrinhoStore";

export function ProductCard({
  category,
  id,
  image,
  description,
  name,
  price,
  rating,
  stock,
  onClick,
}: Product & { onClick?: () => void }) {
  const { addToCart } = useCarrinhoStore();
  return (
    <Card>
      <ImageWrapper onClick={onClick}>
        <Image src={image} alt={name} />
      </ImageWrapper>
      <Content>
        <Header>
          <Category>{category.toUpperCase()}</Category>
          <Rating>
            <FaStar /> {rating.toFixed(1)}
          </Rating>
        </Header>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Footer>
          <Price>{price}</Price>
          <Stock>{stock} em estoque</Stock>
        </Footer>
        <AddButton
          onClick={() =>
            addToCart({
              name,
              price,
              image,
              id,
              description,
              category,
              rating,
              stock,
            })
          }
        >
          <FaShoppingCart /> Adicionar
        </AddButton>
      </Content>
    </Card>
  );
}
