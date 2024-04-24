import Link from "next/link";
import NavBar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <nav className="bg-black p4 lg:px48">
        <div className="flex gap-4 text-gray-100 text-lg">
        <Link href="/order/normal">NORMAL</Link>
        <Link href="/order/premium">PREMIUM</Link>
        </div>
    </nav>
    {children}
    </>
  );
}
