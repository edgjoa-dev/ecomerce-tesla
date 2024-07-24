import { initialData } from '@/seed/seed';
import { Title } from '../../../components/ui/title/Title';
import Link from 'next/link';
import Image from 'next/image';


const productsCart = [
    initialData.products[0],
    initialData.products[1],
    // initialData.products[2],
    // initialData.products[3],
    // initialData.products[4],
];

export default function CheckoutPage() {
    return (
        <section className="flex justify-center items-center mb-72 h-[600px] mt-32 px-10  sm:px-0" >
            <div className="flex flex-col justify-center w-[1000px] p-3 mt-36">

                <Title title={'Verificar compra'} subtitle='Verificación de productos' className={''} />
                <span className='text-xl'> Editar Compra </span>
                <Link href='/cart' className='underline mb-5'> Editar Carrito </ Link>

                <div className='grid grid-cols-1 justify-center sm:grid-cols-2 gap-10'>
                    {/* carrito */}
                    <section className='flex flex-col mt-5'>


                        {/* Items cart */}
                        {
                            productsCart.map(({ slug, images, title, price }) => (
                                <section key={slug} className='flex mt-5'>
                                    <div>
                                        <Image
                                            src={`/products/${images[0]}`}
                                            alt={title}
                                            height={100}
                                            width={100}
                                            style={{
                                                height: '100px',
                                                width: '100px',
                                            }}
                                            className='mr-5 rounded' />
                                    </div>
                                    <div>
                                        <p>{title}</p>
                                        <p>${price} x 3</p>
                                        <p className='font-bold'>Subtotal: ${price * 3}</p>

                                    </div>
                                </section>
                            ))
                        }
                    </section>

                    {/* Checkout */}
                    <section className='p-7 shadow-2xl rounded-xl h-full bg-white'>

                        <h2 className='text-2xl font-semibold'>Dirección de Entrega</h2>
                        <div className='flex flex-col mb-10 mt-5'>
                            <p>Edgar Joaquín Flores</p>
                            <p>Calle Villahermosa #10</p>
                            <p>Col. La Bomba</p>
                            <p>Chalco</p>
                            <p>CP 56600</p>
                            <p>55-1591-0792</p>

                        </div>

                        {/* divider */}
                        <div className='bg-gray-200 rounded mb-10 w-full h-0.5' />

                        <h2 className='text-2xl font-semibold mb-2'>Resumen de compra</h2>
                        <div className='grid grid-cols-2'>
                            <span className='font-semibold' > No. Productos </span>
                            <span className='text-right'> 3 Artículos </span>

                            <span className='font-semibold'> Subtotal </span>
                            <span className='text-right'> $ 100 </span>

                            <span className='font-semibold'> IVA (16%)</span>
                            <span className='text-right'> $ 16 </span>

                            <span className='font-bold text-xl mt-10'> Total </span>
                            <span className='text-right font-bold text-xl mt-10'> $ 116 </span>
                        </div>

                        <section className='flex flex-col justify-center items-center mt-10'>
                            <p className='mb-5 text-sm font-medium'>
                                Al hacer click en <span className='font-semibold'>Ordenar</span>, aceptas nuestros <a href="#" className='underline font-semibold'>términos y condiciones</a> y <a href="#" className='underline font-semibold'>política de privacidad</a>
                            </p>

                            <Link
                                href='/orders/123'
                                className='flex btn-primary justify-center w-10/12'
                            >
                                Ordenar
                            </Link>
                        </section>
                    </section>

                </div>
            </div>
        </section>
    );
}