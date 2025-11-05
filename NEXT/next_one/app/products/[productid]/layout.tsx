
interface Props {
    children: React.ReactNode;
}

const layout = ({ children }: Props) => {
    return (
        <>
            <nav>
                <h1 className="p-4 text-center">This is Product Id Dynamic Page Layout</h1>
            </nav>
            {children}
        </>
    )
}

export default layout