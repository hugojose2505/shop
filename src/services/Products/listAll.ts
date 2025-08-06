import axios from "axios";
import { listProducts } from "@/routes/product/routes";
import { ListProductsResponse } from "@/types/product";

export async function listAllProducts(
  page: number = 1,
  categoryId?: string
): Promise<ListProductsResponse> {
  const params: Record<string, string | number> = { page };
  if (categoryId) {
    params.category = categoryId;
  }

  const response = await axios.get<ListProductsResponse>(listProducts, {
    params,
  });

  if (response.status !== 200) {
    throw new Error("Failed to fetch products");
  }

  return response.data;
}
