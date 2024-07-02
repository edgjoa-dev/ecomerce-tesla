import { notFound } from 'next/navigation';
import { initialData } from '../../../../seed/seed';
import { titleFont } from '@/config/fonts';
import { ProductSlideShow, QuantitySelector, SizeSelector } from '@/components';



interface Props {
    params : {
        slug : string;
    }
}


export default function ProductPage({params}: Props) {

    const { slug } = params;
    const product = initialData.products.find( product => product.slug === slug );

    if (!product) {
        notFound();
        return null; // Agrega este retorno para evitar errores no manejados
    }

    return(
        <section className='mt-16 mb-20 grid md:grid-cols-2 gap-3'>
            {/* Slideshow */}
            <div className='col-span-2 md:col-span-1'>
                <ProductSlideShow
                    images={product.images}
                    title={product.title}
                    className={'product-slide-show'}
                />
            </div>

            {/* Details */}
            <div className='col-span-1 px-5 p-3'>
                <h1 className={`${ titleFont.className } text-2xl font-bold antialiased`} > {product.title} </h1>
                <p className='text-lg font-semibold mb-5 mt-1'>${product.price}</p>

            {/* Selector de Tallas */}
            <SizeSelector
                selectedSize={product.sizes[ 0 ]}
                availableSizes={product.sizes}
            />

            {/* Selector de Cantidad */}
            <QuantitySelector quantity={2} />

            {/* Boton */}
            <button className='bg-blue-600 p-2 rounded-md text-white lg:w-7/12 w-full  hover:bg-blue-800 transition-all' >
                Agregar al carrito
            </button>

            <h3 className='text-sm mt-10 font-bold' > Descripción </h3>
            <p className='text-sm mt-2' > {product.description} </p>

            </div>

        </section>
    )
}