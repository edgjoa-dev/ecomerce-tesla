import { TopMenu } from "@/components";

export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen flex flex-col">
            <TopMenu />
        <section className="px-0 sm:px-10" >
            { children }
        </section>
        </main>
    );
}