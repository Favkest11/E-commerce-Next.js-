"use client"
import { useCartStore } from "@/store/cartStore";
export default function AddToTheCart({product}:{product:any}){
const addToCart=useCartStore((state)=>state.addToCart);
const handleAddToTheCart=()=>{
addToCart(product)
alert(`we sent "${product.title}"to the cart`);
}




    return(
        <button onClick={handleAddToTheCart}>Add</button>
    )
}