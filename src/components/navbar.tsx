"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {

    const pathName = usePathname();
    if(pathName.startsWith("/product")){
        return (
            <nav className="bg-blue-900 p-4 lg:px-48 ">
                <div className="flex gap-4 text-gray-100 text-lg">
                    <Link href="/">HOME</Link>
                    {/* <Link href="/#">PRODUCT LIST</Link> */}
                    {/* <Link href="/product">PRODUCT </Link>
                    <Link href="/product-one">PRODUCT ONE API</Link> */}
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="bg-blue-900 p-4 lg:px-48 ">
                <div className="flex gap-4 text-gray-100 text-lg">
                    <Link href="/">HOME</Link>
                    <Link href="/customer">CUSTOMER</Link>
                    <Link href="/order">ORDER</Link>
                    {/* <Link href="/product">PRODUCT</Link> */}
                    <Link href="/about">ABOUT</Link>
                </div>
            </nav>
        )
    }
}