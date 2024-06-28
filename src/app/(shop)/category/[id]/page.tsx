import { notFound } from "next/navigation";

interface  Props{
    params: {
        id: string;
    }
}

export default function MenPage( { params }: Props) {

    const { id } = params;

    if( id === 'kids' ){
        notFound();
    }

    return(
        <section>
            <h1>Men Page</h1>
        </section>
    )
}