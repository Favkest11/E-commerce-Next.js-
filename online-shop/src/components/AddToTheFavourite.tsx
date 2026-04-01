"use client"
export default function AddToTheFavourite(){

const handleAddToTheFavourite=()=>{
    alert("Product added to the favourite");
}
    return(
        <div>
            <button onClick={handleAddToTheFavourite}>Favourite</button>
        </div>
    )
}