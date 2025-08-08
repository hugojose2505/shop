"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProductById } from "@/services/Products/getById";
import type { Product } from "@/types/product";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import {
  BackButton,
  ProductContainer,
  ProductImage,
  ProductInfo,
  Category,
  Title,
  Price,
  Label,
  Description,
} from "@/styles/product";
import { AddButton } from "@/styles/card";
import { PageWrapper } from "@/styles/listCard";

export default function ProdutoInfo() {
  const searchParams = useSearchParams();
  const productId = searchParams?.get("id");
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!productId) return;

    const fetchData = async () => {
      try {
        const result = await getProductById(productId);
        setProduct(result.product);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    fetchData();
  }, [productId]);

  if (!product) return <PageWrapper>Carregando...</PageWrapper>;

  return (
    <PageWrapper>
      <BackButton onClick={() => window.history.back()}>
        <IoArrowBackCircleOutline size={24} />
        <p>Voltar</p>
      </BackButton>

      <ProductContainer>
        <ProductImage
          src={product.image}
          alt={product.name}
          width={580}
          height={520}
        />
        <ProductInfo>
          <Category>{product.category.toUpperCase()}</Category>
          <Title>{product.name}</Title>
          <Price>R$ {product.price.toFixed(2)}</Price>

          <Label>DESCRIÇÃO</Label>
          <Description>{product.description}</Description>

          <AddButton onClick={() => console.log(`Adicionado: ${product.name}`)}>
            <FaShoppingCart />
            Adicionar
          </AddButton>
        </ProductInfo>
      </ProductContainer>
    </PageWrapper>
  );
}
