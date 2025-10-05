import Navbar from "@/Components/navbar";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
    <html>
      <body>
        <Navbar />
        <main className="p-4 max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
