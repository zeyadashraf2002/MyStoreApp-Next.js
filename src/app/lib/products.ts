export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", { cache: 'no-store' });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProductById(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
  });
  if (!res.ok) throw new Error("Product not found");
  return res.json();
}

export async function searchProducts(query: string) {
  const res = await fetch(`https://fakestoreapi.com/products?search=${query}`, {
  });
  if (!res.ok) throw new Error("Product not found");
  return res.json();
}