"use client"

import React, { useState } from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
    quantity: number;
}

export const QuantitySelector = ({quantity}: Props) => {

    const [ count, setCount ] = useState(quantity)

    const onQuantityChange = ( value: number ) => {
        if( count + value < 1  ) return;

        setCount(count + value)
    }

    return (
        <section className='flex justify-start items-center mb-3  max-w-[200px] p-2 sm:w-full' >
            <button className='mr-1' onClick={()=> onQuantityChange(-1)}>
                <IoRemoveCircleOutline size={30} />
            </button>

            <span className='w-20 mx-3 px-5 bg-gray-100 text-center py-1 rounded-sm'>
                { count }
            </span>

            <button className='ml-1' onClick={()=> onQuantityChange(1)}>
                <IoAddCircleOutline size={30} />
            </button>
        </section>
    )
}
