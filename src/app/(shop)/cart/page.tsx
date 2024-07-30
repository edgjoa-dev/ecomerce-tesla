import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { initialData } from '@/seed/seed';

import { Title } from '../../../components/ui/title/Title';
import { QuantitySelector } from '@/components';


const productsCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
    initialData.products[3],
    initialData.products[4],
];

export default function Cart() {

    //redirect("/empty");


    return (
        <section className="flex justify-center items-center mb-72 h-[600px] mt-32 px-10  sm:px-0" >
            <div className="flex flex-col w-[1000px] p-3 mt-36">

                <Title title={'Carrito de Compras'} subtitle={''} className={''} />

                <div className='grid grid-cols-1 justify-center sm:grid-cols-2 gap-10'>
                    {/* carrito */}
                    <section className='flex flex-col mt-5'>
                        <span className='text-xl'> Agregar más items </span>
                        <Link href='/' className='underline mb-5'> Continuar comprando</ Link>


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
                                        <p>${price}</p>
                                        <QuantitySelector quantity={3} />
                                        <button className='rounded-lg  p-1 w-[100px] mt-1 hover:text-red-600 hover:transition hover:outline hover:ease-in-out'>
                                            Remover
                                        </button>

                                    </div>
                                </section>
                            ))
                        }
                    </section>

                    {/* Checkout */}
                    <section className='p-7 shadow-2xl rounded-xl h-[600px]'>
                        <h2 className='text-2xl mb-2'>Resumen de compra</h2>
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
                    <section className='flex justify-center items-center mt-10'>
                        <Link
                            href='/checkout/address'
                            className='flex btn-primary justify-center w-10/12'
                        >
                            Ir a Checkout
                        </Link>
                    </section>
                    </section>

                </div>
            </div>
        </section>
    );
}