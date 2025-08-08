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

export function ProductCard({
  category,
  image,
  description,
  name,
  price,
  rating,
  stock,
  onAdd,
  onClick,
}: Product & { onAdd: () => void; onClick?: () => void }) {
  return (
    <Card >
      <ImageWrapper  onClick={onClick}>
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
        <AddButton onClick={onAdd}>
          <FaShoppingCart /> Adicionar
        </AddButton>
      </Content>
    </Card>
  );
}
