'use client';
import { signOut } from 'next-auth/react';  // import صح من next-auth/react

export default function LogoutPage() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
      Sign Out
    </button>
  );
}