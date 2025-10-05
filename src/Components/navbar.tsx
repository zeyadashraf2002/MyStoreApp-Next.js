import { auth } from "@/services/auth";
import ActiveLinkButton from "./activelink";
import Image from "next/image";

export default async function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/category", label: "Category" },
    { href: "/serach", label: "Search" },
    { href: "/cart", label: "Cart" },
    { href: "/profile", label: "Profile" },
  ];

  const session = await auth();

if (session?.user) {
  links.push({ href: `/api/auth/signout?callbackUrl=/`, label: "Logout" });
} else {
    links.push({ href: "/login", label: "Login" });
  }

  return (
    <nav className="bg-green-500 text-white p-6 flex justify-between items-center shadow-lg">
      <div className="flex gap-8">
        {links.map((link) => (
          <ActiveLinkButton key={link.href} href={link.href} label={link.label} />
        ))}
      </div>

      {session?.user && (
        <Image
          src={session.user.image as string}
          alt={session.user.name as string}
          width={50}
          height={50}
          className="rounded-full border-2 border-white"
        />
      )}
    </nav>
  );
}
