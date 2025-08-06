"use client";
import React, { useState, useEffect } from "react";
import { ProductCard } from "@/components/Card";
import { listAllProducts } from "@/services/Products/listAll";
import { Product, Pagination as PagType } from "@/types/product";
import { Pagination } from "@/components/Pagination";
import {
  CardCategory,
  Grid,
  GridCategory,
  PageWrapper,
  Select,
} from "@/styles/listCard";
import { listAllCategories } from "@/services/Categories/listAllCategories";
import { Category } from "@/types/categories";
import styled from "styled-components";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [pagination, setPagination] = useState<PagType>({
    currentPage: 1,
    totalPages: 1,
    totalProducts: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const fetchProducts = async (page: number, categoryId?: string) => {
    try {
      const { products, pagination } = await listAllProducts(page, categoryId);
      setProducts(products);
      setPagination(pagination);
    } catch (err: any) {
      console.error(err.message || "Erro ao carregar produtos");
    }
  };

  useEffect(() => {
    fetchProducts(pagination.currentPage, selectedCategory);
  }, [pagination.currentPage, selectedCategory]);

  const fetchCategories = async () => {
    try {
      const { categories } = await listAllCategories();
      setCategories(categories);
    } catch (err: any) {
      console.error(err.message || "Erro ao carregar categorias");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
    setPagination((p) => ({ ...p, currentPage: 1 }));
  };

  return (
    <PageWrapper>
      <h1>Todos os Produtos</h1>

      <Select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Todas as categorias</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </Select>

      <Grid>
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            {...prod}
            onAdd={() => console.log(`Adicionado: ${prod.name}`)}
          />
        ))}
      </Grid>

      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={(page) =>
          setPagination((p) => ({ ...p, currentPage: page }))
        }
      />

      <h1>Principais categorias</h1>
      <GridCategory>
        {categories.map((cat) => (
          <CardCategory key={cat.id}>
            <h3>{cat.name}</h3>
            <p>{cat.productCount} produtos</p>
          </CardCategory>
        ))}
      </GridCategory>
    </PageWrapper>
  );
}
