"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function SearchComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [inputValue, setInputValue] = useState(searchParams.get("category") || "");

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (inputValue.trim() === "") {
      params.delete("category");
    } else {
      params.set("category", inputValue.trim());
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Search by category..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border px-2 py-1 rounded flex-1"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-1 rounded"
      >
        Search
      </button>
    </div>
  );
}
