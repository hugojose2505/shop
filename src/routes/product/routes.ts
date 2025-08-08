const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const listProducts = `${apiUrl}/api/products`;
export const productById = (id: string) => `${apiUrl}/api/products/${id}`;