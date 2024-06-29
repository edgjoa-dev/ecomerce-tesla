import { Product } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    product: Product;
}


export const ProductGridItem = ({ product }: Props) => {
    return (
        <section className='rounded-md overflow-hidden fade-in' >
            <Image
                src={`/products/${product.images[0]}`}
                alt={product.title}
                className='w-full object-cover'
                width={500}
                height={500}
            />
            <section className='p-4 flex flex-col' >
                <Link
                    href={`/product/${product.slug}`}>
                        { product.title }
                </Link>
                <span className='font-bold' >
                    ${ product.price }
                </span>
            </section>
        </section>
    )
}
