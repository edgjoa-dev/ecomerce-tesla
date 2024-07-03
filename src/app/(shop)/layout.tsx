import { Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen flex flex-col">
            <TopMenu />
            <Sidebar />
        <section className="px-0 sm:px-10" >
            { children }
        </section>
        </main>
    );
}