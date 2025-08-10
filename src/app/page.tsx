"use client";
import React, { useState, useEffect, useMemo } from "react";
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

const organizeProducts = [
  { id: "new", name: "Novidades" },
  { id: "priceDesc", name: "Preço: Maior para Menor" },
  { id: "priceAsc", name: "Preço: Menor para Maior" },
  { id: "mostSold", name: "Mais Vendidos" },
];

export default function HomePage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { categories } = await listAllCategories();
        setCategories(categories);
      } catch (err: any) {
        console.error(err.message || "Erro ao carregar categorias");
      }
    };
    fetchCategories();
  }, []);

  const sortedProducts = useMemo(() => {
    const list = [...products];
    switch (sortOption) {
      case "priceAsc":
        return list.sort((a, b) => a.price - b.price);
      case "priceDesc":
        return list.sort((a, b) => b.price - a.price);
      case "mostSold":
        return list.sort((a, b) => b.rating - a.rating);
      case "new":
        return list.sort((a, b) => b.id - a.id);
      default:
        return list;
    }
  }, [products, sortOption]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value;
    setSelectedCategory(categoryId);
    setPagination((p) => ({ ...p, currentPage: 1 }));
    if (categoryId) {
      const cat = categories.find((c) => c.id === categoryId);
      router.push(`/categoria/${cat ? renameRoute(cat.name) : ""}`);
    } else {
      router.push(`/`);
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    setPagination((p) => ({ ...p, currentPage: 1 }));
  };

  const handleCategoryClick = (cat: Category) => {
    setSelectedCategory(cat.id);
    setPagination((p) => ({ ...p, currentPage: 1 }));
    router.push(`/categoria/${renameRoute(cat.name)}`);
  };

  return (
    <PageWrapper>
      <h1>Todos os Produtos</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Todas as categorias</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </Select>

        <Select value={sortOption} onChange={handleSortChange}>
          <option value="">Organizar por:</option>
          {organizeProducts.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </Select>
      </div>

      <Grid>
        {sortedProducts.map((prod) => (
          <ProductCard
            key={prod.id}
            {...prod}
            onClick={() =>
              router.push(`/produto/${renameRoute(prod.name)}?id=${prod.id}`)
            }
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
