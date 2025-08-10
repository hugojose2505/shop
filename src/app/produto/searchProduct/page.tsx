import { ProductCard } from "@/components/Card";
import { listAllProducts } from "@/services/Products/listAll";
import { Grid } from "@/styles/listCard";

export default async function Page({
  searchParams,
}: {
  searchParams: { search?: string; page?: string };
}) {
  const search = (searchParams.search ?? "").trim();
  const page = Number(searchParams.page ?? 1);

  const res = await listAllProducts(page, undefined, search);
  const products = res.products ?? [];

  return (
    <div>
      <h2>Resultados para: {search}</h2>
      <Grid>
        {products.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </Grid>
    </div>
  );
}
