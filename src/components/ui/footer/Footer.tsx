import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className='flex w-full justify-center text-xs mt-52 mb-5 bottom-0'>
            <section>
                <p>© { new Date().getFullYear() } | <span className={`${ titleFont.className } antialiased font-bold`}> <Link href='/' className='hover:underline'>Teslo shop</Link></span></p>
            </section>
            <section className='ml-1'>
                <p>Created by <a href="https://github.com/edgjoa-dev?tab=repositories" className='hover:underline'>Edgar Joaquin Flores</a></p>
            </section>
        </footer>
    )
}
