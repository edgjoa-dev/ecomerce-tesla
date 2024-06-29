'use client'
import React from 'react'
import { IoCloseOutline, IoSearchOutline } from 'react-icons/io5'

export const Sidebar = () => {
    return (
        <div>
        {/* Background Black */}
            <div
                className='fixed top-0 w-screen h-screen z-10 bg-black opacity-25'
            />
            {/* Blur */}
            <div
                className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
            />

            {/* side menu */}
            <nav className='fixed p-5 right-0 top-0 w-[350px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-200'>

                {/* close */}
                <IoCloseOutline
                    size={30}
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={ ()=> alert('Close') }
                />

                {/* input search */}
                <div className='relative mt-14'>
                    <IoSearchOutline size={20} className='absolute top-2 left-2'/>
                    <input
                        type='text'
                        placeholder='Buscar'
                        className='w-full rounded-md bg-gray-50 pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-400 hover:border-blue-200 transition-all'
                    />
                </div>
            </nav>
        </div>
    )
}
