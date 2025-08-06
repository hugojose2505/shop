"use client";
import React, { useState, useEffect } from "react";
import { ProductCard } from "@/components/Card";
import { listAllProducts } from "@/services/Products/listAll";
import { Product, Pagination as PagType } from "@/types/product";
import { Pagination } from "@/components/Pagination";
import { Grid, PageWrapper } from "@/styles/listCard";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<PagType>({
    currentPage: 1,
    totalPages: 1,
    totalProducts: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const fetchProducts = async (page: number) => {
    try {
      const { products, pagination } = await listAllProducts(page);
      setProducts(products);
      setPagination(pagination);
    } catch (err: any) {
      console.error(err.message || "Erro ao carregar produtos");
    }
  };

  useEffect(() => {
    fetchProducts(pagination.currentPage);
  }, [pagination.currentPage]);

  return (
    <PageWrapper>
      <h1>Todos os Produtos</h1>
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

    </PageWrapper>
  );
}
