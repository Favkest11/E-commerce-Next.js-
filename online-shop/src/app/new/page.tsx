import { supabase } from "../lib/supabase"
import AddToTheCart from "@/components/AddToTheCart";
import AddToTheFavourite from "@/components/AddToTheFavourite";
export default async function New(){
const {data:products,error}=await supabase.from('products').select('*').eq('is_new', true);
if(error){
    <div>Sorry something went wrong,try again later</div>
}
    return(
        <div>
         <ul>
        {products?.map((product)=>(
        <li key={product.id}>
            <h3>NAME:::{product.title}</h3>
            <h3>PRICE::::{product.price}</h3>
            {product.image_url &&(
             <img src={product.image_url}></img>
            )}
             <AddToTheCart product={product}/>
             <AddToTheFavourite product={product}/>
        </li>
            

         ))} 
        
        </ul>   
      
        </div>
    )
}