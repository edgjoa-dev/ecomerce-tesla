import { titleFont } from '@/config/fonts';
import Link from 'next/link';
import { IoArrowBackOutline } from 'react-icons/io5';


export default function NotFound() {
    return (
        <section className='flex justify-center items-center content-center flex-col h-screen' >
            <h1 className={ `${titleFont.className} text-7xl` } > 404 Not Found Page </h1>
            <Link href='/' className={`${titleFont.className} font-thin transition-all hover:text-gray-700 flex items-center mt-5`} >
                <span className='mr-2' > <IoArrowBackOutline /> </span>
                Regresar a Inicio
            </Link>
        </section>
    )
}