
export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className=" bg-teal-500 " >
            {children}
        </div>
    );
}