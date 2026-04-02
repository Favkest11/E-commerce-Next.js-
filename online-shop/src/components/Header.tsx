"use client"
import { useCartStore } from "@/store/cartStore"
import { useFavouriteStore } from "@/store/favouriteStore";
import Link from "next/link";
export default function Header(){
const cart=useCartStore((state)=>state.cart);
const fav=useFavouriteStore((state)=>state.favourite);
return(
    <div>
        <header>
      <nav>
        <Link href="/">Main Page</Link>
        <br></br>
        <Link href="/cart">Cart: {cart.length}</Link>
        <br></br>
        <Link href="/new">New products</Link>
        <br></br>
        <Link href="/favourite">Favourite:{fav.length}</Link>
       
      </nav>
      
    </header>
    </div>
)
}