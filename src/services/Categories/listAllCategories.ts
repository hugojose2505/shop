import { listCategories } from "@/routes/categories/routes";
import { Categories } from "@/types/categories";
import axios from "axios";

export async function listAllCategories(): Promise<Categories> {
  const response = await axios.get<Categories>(`${listCategories}`);
  console.log("Response from listAllCategories:", listCategories);

  if (response.status !== 200) {
    throw new Error("Failed to fetch categories");
  }

  return response.data;
}
