import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Home",
  description: "This is the home page",
};

const inter = Inter({ 
  subsets: ["latin"],
   weight: ["400", "700"]
   });


export default function HomePage() {
  return (
    <div className={`p-8 text-center ${inter.className} bg-gradient-to-br from-green-50 to-white min-h-screen flex items-center justify-center`}>
      <div className="max-w-2xl">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to Our Store</h1>
        <p className="text-gray-600 mt-4 text-xl leading-relaxed">
          Discover amazing products with Tailwind and Next.js. Shop now and enjoy the best deals!
        </p>
      </div>
    </div>
  );
}