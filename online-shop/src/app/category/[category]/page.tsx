import { supabase } from "@/app/lib/supabase";
import AddToTheCart from "@/components/AddToTheCart";
import AddToTheFavourite from "@/components/AddToTheFavourite";
export default async function CategoryPage({params}:{params:{category:string}}){
    const resolvedParams = await params;
    const currentCategory=resolvedParams.category;
    const{data:products,error}=await supabase.from('products').select('*').eq('category',currentCategory)
    if(error){
        return<div>Something went wrong</div>
    }


    return(
        <div>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        <h3>NAME:::{product.title}</h3>
                        <h3>PRICE::::{product.price}</h3>
                        {product.image_url &&(
                            <img src={product.image_url}></img>
                        )}
                        <AddToTheCart></AddToTheCart>
                        <AddToTheFavourite></AddToTheFavourite>
                    </li>
                ))}
            </ul>
        </div>
    )
}