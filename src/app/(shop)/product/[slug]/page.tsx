import { notFound } from 'next/navigation';
import { initialData } from '../../../../seed/seed';
import Image from 'next/image';
import { titleFont } from '@/config/fonts';



interface Props {
    params : {
        slug : string;
    }
}


export default function ProductPage({params}: Props) {

    const { slug } = params;
    const product = initialData.products.find( product => product.slug === slug );

    if (!product){
        notFound();
    }

    return(
        <section className='mt-5 mb-20 grid md:grid-cols-3 gap-3'>
            {/* Slideshow */}
            <div className='col-span-1 md:col-span-2 bg-red-500'>
                {/* Imagenes */}
                Photo
            </div>

            {/* Details */}
            <div className='col-span-1 px-5 p-3'>
                <h1 className={`${ titleFont.className } text-2xl font-bold antialiased`} > {product.title} </h1>
                <p className='text-lg font-semibold mb-5 mt-1'>${product.price}</p>

            {/* Selector de Tallas */}

            {/* Selector de Cantidad */}

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