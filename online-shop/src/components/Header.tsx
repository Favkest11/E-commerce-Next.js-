"use client"
import { useCartStore } from "@/store/cartStore"
import Link from "next/link";
export default function Header(){
const cart=useCartStore((state)=>state.cart);

return(
    <div>
        <header>
      <nav>
        <Link href="/cart">Cart: {cart.length}</Link>
      </nav>
    </header>
    </div>
)
}