import { titleFont } from "@/config/fonts";


export default function EmptyPage() {
    return (
        <section>
            <h2 className={`${ titleFont.className } font-bold `} > Empty page </h2>
        </section>
    )
}
