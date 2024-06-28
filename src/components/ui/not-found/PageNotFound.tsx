import React from 'react'
import Link from 'next/link'
import 'animate.css';

import { IoArrowBackOutline } from 'react-icons/io5'

import { titleFont } from '@/config/fonts'
import Image from 'next/image';

export const PageNotFound = () => {
    return (
        <section className='flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle' >

            <div className='flex flex-col content-center text-center align-middle px-5 mx-5' >

                <h2 className={`${titleFont.className} antialiased text-9xl animate__animated animate__fadeInUp`} > 404 Not Found Page </h2>

                <Link href='/' className={`${titleFont.className} flex justify-center items-center mt-5 font-light hover:underline transition-all animate__animated animate__fadeInUp`} >
                    <span className='mr-2 animate__animated animate__fadeInUp' > <IoArrowBackOutline /> </span>
                    Regresar a Inicio
                </Link>
            </div>

            <div className='mx-5 px-5 animate__animated animate__fadeInUp'>
                <Image src='/imgs/starman_750x750.png' alt='Image_404_error' width={550} height={550} ></Image>
            </div>
        </section>
    )
}
