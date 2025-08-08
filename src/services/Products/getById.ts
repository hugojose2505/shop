import axios from "axios";
import {  productById } from "@/routes/product/routes";
import {  ProductById } from "@/types/product";

export async function getProductById(id: string): Promise<ProductById> {
  const response = await axios.get<ProductById>(productById(id));

  if (response.status !== 200) {
    throw new Error("Failed to fetch product");
  }

  return response.data;
}
