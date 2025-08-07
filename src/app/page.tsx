"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ProductCard } from "@/components/Card";
import { listAllProducts } from "@/services/Products/listAll";
import type { Product, Pagination as PagType } from "@/types/product";
import { Pagination } from "@/components/Pagination";
import { listAllCategories } from "@/services/Categories/listAllCategories";
import type { Category } from "@/types/categories";
import { renameRoute } from "@/utils/renameRoute";
import {
  CardCategory,
  Grid,
  GridCategory,
  PageWrapper,
  Select,
} from "@/styles/listCard";

export default function HomePage() {
  const router = useRouter();
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

    if (categoryId) {
      const cat = categories.find((c) => c.id === categoryId);
      const slug = cat ? renameRoute(cat.name) : "";
      router.push(`/categoria/${slug}`);
    } else {
      router.push(`/`);
    }
  };

  const handleCategoryClick = (cat: Category) => {
    const slug = renameRoute(cat.name);
    router.push(`/categoria/${slug}`);
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
          <CardCategory
            key={cat.id}
            onClick={() => handleCategoryClick(cat)}
            style={{ cursor: "pointer" }}
          >
            <h3>{cat.name}</h3>
            <p>{cat.productCount} produtos</p>
          </CardCategory>
        ))}
      </GridCategory>
    </PageWrapper>
  );
}
