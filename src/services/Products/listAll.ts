import { listProducts } from "@/routes/product/routes";
import { ListProductsResponse } from "@/types/product";
import axios from "axios";

export async function listAllProducts(
  page: number = 1
): Promise<ListProductsResponse> {
  const response = await axios.get<ListProductsResponse>(
    `${listProducts}`,
    {
      params: { page },
    }
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch products");
  }

  return response.data;
}
