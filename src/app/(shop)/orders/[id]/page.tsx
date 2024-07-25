import { initialData } from '@/seed/seed';
import Image from 'next/image';
import { Title } from '@/components';
import { IoCardOutline } from 'react-icons/io5';
import clsx from 'clsx';


const productsCart = [
    initialData.products[0],
    initialData.products[1],
    // initialData.products[2],
    // initialData.products[3],
    // initialData.products[4],
];


interface Props {
    params: {
        id: string,
    }
}

export default function OrderPage({ params }: Props) {

    const { id } = params;

    //todo: Pendiente de realizar verificación de usuario
    //redirect(/)

    return (
        <section className="flex justify-center items-center mb-72 h-[600px] px-10  sm:px-0" >
            <div className="flex flex-col justify-center w-[1000px] p-3 mt-36">

                <Title title={`Orden #${id}`} subtitle='' className={''} />

                <div className='flex flex-col mt-1'>
                    <div className={
                        clsx(
                            "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5 w-5/12",
                            {
                                'bg-red-500':false,
                                'bg-green-500': true,
                            }
                        )
                    }>
                        <IoCardOutline />
                        {/* <span className='mx-2 font-light text-sm'> Pendiente de pago </span> */}
                        <span className='mx-2 font-light text-sm'> Pagado </span>
                    </div>
                </div>

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

                        <div className='flex flex-col mt-1'>
                    <div className={
                        clsx(
                            "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5 mt-5",
                            {
                                'bg-red-500':false,
                                'bg-green-500': true,
                            }
                        )
                    }>
                        <IoCardOutline />
                        {/* <span className='mx-2 font-light text-sm'> Pendiente de pago </span> */}
                        <span className='mx-2 font-light text-sm'> Pagado </span>
                    </div>
                </div>
                    </section>

                </div>
            </div>
        </section>
    );
}