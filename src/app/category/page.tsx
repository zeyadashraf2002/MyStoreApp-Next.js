import Link from "next/link";

async function getCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if(res.ok)
    {
        return res.json();
    }
  else
    {
        throw new Error("Failed to fetch categories");
    }
}

export default async function Categories() {
  const categories: string[] = await getCategories();

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Shop by Category</h2>
      <ul className="space-y-4 max-w-md mx-auto">
        {categories.map((cat) => (
          <li key={cat} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
            <Link
              href={`/category/${encodeURIComponent(cat)}`}
              className="text-green-600 hover:text-green-800 font-semibold text-lg block"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}