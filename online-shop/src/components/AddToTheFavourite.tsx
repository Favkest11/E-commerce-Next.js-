"use client"
import { useFavouriteStore } from "@/store/favouriteStore";
export default function AddToTheFavourite({product}:{product:any}){
const AddToFavourite=useFavouriteStore((state)=>state.addToTheFavourite)
const handleAddToTheFavourite=()=>{
    AddToFavourite(product);
    alert("Product added to the favourite");
}
    return(
        
            <button onClick={handleAddToTheFavourite}>Favourite</button>
        
    )
}