'use client'
import { titleFont } from '@/config/fonts'
import { useUiStore } from '@/store'
import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

export const TopMenu = () => {

    const openSideMenu = useUiStore(state => state.openSideMenu);

    return(
        <nav className=' flex justify-between items-center w-full p-1'>
            {/* LOGO */}
            <div>
                <Link href='/' className={`${titleFont.className}`} >  <span className='font-bold' > Tesla </span>| Shop </Link>
            </div>

            {/* CATEGORIES */}
            <div className='hidden sm:block' >
                <Link href='/category/mens'   className=' rounded-md p-2 m-2  hover:bg-gray-100 transition-all' > Hombres </Link>
                <Link href='/category/womens' className=' rounded-md p-2 m-2  hover:bg-gray-100 transition-all' > Mujeres </Link>
                <Link href='/category/kids'   className=' rounded-md p-2 m-2  hover:bg-gray-100 transition-all' > Niños </Link>
            </div>

            {/* SEARCH, CART, MENU */}
            <div className='flex items-center' >
                <Link href='/search'> < IoSearchOutline className='w-5 h-5 mr-2' /> </Link>

                <Link href='/cart'>
                    <div className='relative mr-2' >
                        <span className='absolute text-xs rounded-full px-1 -top-1 -right-2 font-bold bg-blue-700 text-white' > 3 </span>
                        <IoCartOutline className='w-5 h-5' />
                    </div>
                </Link>

                <button className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' onClick={openSideMenu} >
                    Menú
                </button>
            </div>
        </nav>
    )
}
