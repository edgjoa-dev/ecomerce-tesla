import React from 'react'
import { Product } from '@/interfaces'

interface Props {
    products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
    return (
        <section className='grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10 ' >
            {
                products.map(({ title, slug, price }) => (
                    <div key={slug} className='flex flex-col justify-center items-center' >
                        <h3>{title}</h3>
                        <p>{price}</p>
                    </div>
                ))
            }
        </section>
    )
}
