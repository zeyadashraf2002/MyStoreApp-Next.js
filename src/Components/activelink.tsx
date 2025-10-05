"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkButton {
  href: string;
  label: string;
}

export default function ActiveLink({ href, label }: ActiveLinkButton) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${
        pathname === href ? "font-bold underline" : ""
      } hover:text-gray-200`}
    >
      {label}
    </Link>
  );
}
