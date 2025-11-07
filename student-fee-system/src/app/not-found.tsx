"use client";

import { useRouter } from "next/navigation";
import Button from "../components/ui/Button";

const NotFoundPage = () => {
    const router = useRouter();

    const goHome = () => {
        router.push("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
            <h1 className="text-9xl font-extrabold text-red-500 mb-4">404</h1>
            <p className="text-2xl md:text-3xl mb-6">Oops! Page Not Found</p>
            <p className="mb-6 text-gray-600 text-center max-w-md">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>

            <Button text="Go Back Home" onClick={goHome} />
        </div>
    );
};

export default NotFoundPage;
