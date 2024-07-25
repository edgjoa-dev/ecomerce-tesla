import Link from "next/link";
import { IoArrowBackOutline, IoCartOutline } from "react-icons/io5";


export default function EmptyPage() {
    return (
        <section className="flex justify-center items-center h-[800px]">
            <IoCartOutline size={120} className="mx-5" />
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-semibold"> Carrito Vacío </h1>
                <Link href='/' className="group flex justify-center items-center text-xl text-slate-600 mt-2 underline hover:text-slate-900">
                    <IoArrowBackOutline className="mr-1 transition-all group-hover:-translate-x-3" size={25}/>
                    <span>Regresar</span>
                </Link>
            </div>
        </section>
    )
}
