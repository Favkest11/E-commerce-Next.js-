import { supabase } from "./lib/supabase";
import Link from 'next/link';
export default async function Home() {
 const{data:products,error}=await supabase.from('products').select('*')
 if(error){
    console.log(error);
   return <div>Sorry,something went wrong:{error.message}</div>
   
 }
 const uniqCategory=products ? Array.from(new Set(products.map((product)=>product.category))) : [];



    return(
        <div>
            <h3>Categories</h3>
            <ul>
                {uniqCategory.map((uc)=>(
                <li key={uc}>
                    <Link href={`/category/${uc}`}>{uc}</Link>
                </li>
                ))}
               
            </ul>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        <h3>NAME:::{product.title}</h3>
                        <h3>PRICE::::{product.price}</h3>
                        {product.image_url &&(
                            <img src={product.image_url}></img>
                        )}
                        <button>Add to the cart</button>
                        <button>Favourite</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
