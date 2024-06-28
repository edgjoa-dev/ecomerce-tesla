import { titleFont } from '@/config/fonts';
import React from 'react'

interface Props {
    title: string;
    subtitle: string;
    className: string;
}

export const Title = ({ title, subtitle, className }: Props) => {
    return (
        <div className={`mt-3 ${className}`}>
            <h1 className={`${titleFont.className} antialiased font-semibold text-4xl my-10`} >
                {title}
            </h1>

            {
                subtitle && (
                    <h2 className=" text-xl mb-10 " >
                        {subtitle}
                    </h2>
                )
            }
        </div>
    )
}
