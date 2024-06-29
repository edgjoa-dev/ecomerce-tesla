import { TopMenu } from "@/components";

export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen flex flex-col px-2">
            <TopMenu />
        <section className="px-0 sm:px-10" >
            { children }
        </section>
        </main>
    );
}