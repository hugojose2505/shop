"use client";
import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { ProductCard } from "@/components/Card";
import { Pagination } from "@/components/Pagination";
import { PageWrapper, Grid } from "@/styles/listCard";
import { listAllProducts } from "@/services/Products/listAll";
import { listAllCategories } from "@/services/Categories/listAllCategories";
import { renameRoute } from "@/utils/renameRoute";
import type { Product, Pagination as PagType } from "@/types/product";
import type { Category } from "@/types/categories";

export default function CategoryPage() {
  const params = useParams<{ nameCategoria: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();

  const slug = params?.nameCategoria!;
  const pageParam = searchParams?.get("page") ?? "1";
  const page = parseInt(pageParam, 10);

  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<PagType>({
    currentPage: page,
    totalPages: 1,
    totalProducts: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    listAllProducts(page, category?.id || slug)
      .then(({ products, pagination }) => {
        setProducts(products);
        setPagination(pagination);
      })
      .catch(console.error);
  }, [page, category, slug]);

  useEffect(() => {
    listAllCategories()
      .then(({ categories }) => {
        const found = categories.find((c) => renameRoute(c.name) === slug);
        if (found) setCategory(found);
        else {
          router.replace("/");
        }
      })
      .catch(console.error);
  }, [slug, router]);

  if (!category) {
    return <PageWrapper>Carregando categoria…</PageWrapper>;
  }

  return (
    <PageWrapper>
      <p>
        Produtos / <span style={{ fontWeight: "bold" }}>{category.name}</span>
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>

      <Grid>
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            onClick={() => {
              const slug = renameRoute(prod.name);
              router.push(`/produto/${slug}?id=${prod.id}`);
            }}
            {...prod}
          />
        ))}
      </Grid>

      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onPageChange={(newPage) =>
          router.push(`/categoria/${slug}?page=${newPage}`)
        }
      />
    </PageWrapper>
  );
}
