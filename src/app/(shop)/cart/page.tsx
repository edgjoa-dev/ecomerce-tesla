import { initialData } from '@/seed/seed';
import { Title } from '../../../components/ui/title/Title';
import Link from 'next/link';
import Image from 'next/image';
import { QuantitySelector } from '@/components';


const productsCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
];

export default function Cart() {
    return (
        <section className="flex justify-center items-center mb-72 h-[600px] w-full px-10  sm:px-0" >
            <div className="flex flex-col w-[1000px] p-3 mt-36">

                <Title title={'Carrito de Compras'} subtitle={''} className={''} />

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                    {/* carrito */}
                    <div className='flex flex-col mt-5'>
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
                                            className='mr-5 rounded' />
                                    </div>
                                    <div>
                                        <p>{title}</p>
                                        <p>${price}</p>
                                        <QuantitySelector quantity={3} />
                                        <button className='rounded-lg outline outline-2 outline-offset-2 p-1 w-[120px] mt-1 hover:bg-gray-100 hover:underline hover:outline-none'>
                                            Remover
                                        </button>

                                    </div>
                                </section>
                            ))
                        }
                    </div>

                    {/* Checkout */}
                    <div className='flex flex-col justify-center items-center mt-5 p-3' >Checkout</div>
                </div>
            </div>
        </section>
    );
}