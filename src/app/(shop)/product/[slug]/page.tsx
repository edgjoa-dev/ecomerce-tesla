import { notFound } from 'next/navigation';
import { initialData } from '../../../../seed/seed';
import { titleFont } from '@/config/fonts';
import { ProductMobileSlideShow, ProductSlideShow, QuantitySelector, SizeSelector } from '@/components';



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
        <section className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-6 gap-1">

            {/* Slideshow */}
            <div className="col-span-2 md:col-span-3">

                {/* MobileDesing */}
                <ProductMobileSlideShow
                    images={product.images}
                    title={product.title}
                    className="block md:hidden"
                />

                {/* Desktop desing */}
                <ProductSlideShow
                    images={product.images}
                    title={product.title}
                    className="hidden md:block"
                />
            </div>

            {/* Details */}
            <div className='col-span-2 px-5 py-5 sm:ml-5'>
                <h1 className={`${ titleFont.className } text-2xl font-bold antialiased`} > {product.title} </h1>
                <p className='text-lg font-semibold mb-5 mt-1'>${product.price}</p>

            {/* Selector de Tallas */}
            <SizeSelector
                selectedSize={product.sizes[ 0 ]}
                availableSizes={product.sizes}
            />

            {/* Selector de Cantidad */}
            <QuantitySelector quantity={1} />

            {/* Boton */}
            <button className='bg-blue-600 p-2 rounded-md text-white lg:w-7/12 w-full  hover:bg-blue-800 transition-all' >
                Agregar al carrito
            </button>

            <h3 className='text-sm mt-10 font-bold' > Descripción </h3>
            <p className='text-sm mt-1' > {product.description} </p>

            </div>

        </section>
    )
}