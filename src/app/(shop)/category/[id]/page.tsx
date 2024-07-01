import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed"
import { notFound } from "next/navigation";
//import { notFound } from "next/navigation";

interface  Props{
    params: {
        id: Category;
    }
}

const seedProducts = initialData.products;

export default function CategoryPage({ params }: Props) {

    const { id } = params;
    const products = seedProducts.filter(product => product.gender === id )

    const labels: Record<Category, string> = {
        'men':    'Hombres',
        'women':  'Mujeres',
        'kid':    'Niños',
        'unisex': 'Todos',
    }

    if( products.length === 0 ){
        notFound();
    }


    return(
        <section>
            <Title
                title={`Articulos para ${labels[id]}`}
                subtitle={`${(labels as any)[id]}`}
                className="mb-2" />

            <ProductGrid
                products={products}
            />
        </section>
    )
}