import Link from "next/link"

const page = () => {
    const paramsId = 100;
    return (
        <>
            <div className='p-4 text-center bg-orange-400'>This is Product Main Page</div>
            <ul className='flex flex-col gap-4 justify-center items-center p-4'>
                <li className='text-md bg-gray-800 cursor-pointer text-white p-y-2 px-4 rounded-sm'>
                    <Link href='/products/1'>Product 1</Link>
                </li>

                <li className='text-md bg-gray-800 cursor-pointer text-white p-y-2 px-4 rounded-sm'>
                    <Link href='/products/2'>Product 2</Link>
                </li>
                <li className='text-md bg-gray-800 cursor-pointer text-white p-y-2 px-4 rounded-sm'>
                    <Link href='/products/3' >Product 3</Link>
                </li>


                {/* this replace will take me back to the home page directly */}
                <li className='text-md bg-gray-800 cursor-pointer text-white p-y-2 px-4 rounded-sm'>
                    <Link href={`/products/${paramsId}`} replace >Product DyanamicId</Link>
                </li>
            </ul>
        </>

    )
}

export default page