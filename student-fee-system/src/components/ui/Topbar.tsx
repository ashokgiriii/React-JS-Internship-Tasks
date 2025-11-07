"use client"

import { useRouter } from "next/navigation"
import Button from "@/src/components/ui/Button"
import { useAuthContext } from "@/src/context/Authcontext"
import { useLogout } from "@/src/hooks/useLogout"

const Topbar = () => {
    const router = useRouter()
    const { user } = useAuthContext()
    const logout = useLogout()

    const login = () => router.push("/login")

    return (
        <div className="px-10  h-[15vh] shadow pb-8 pt-2  flex justify-between items-center">
            <h1 className="text-2xl tracking-wider text-gray-800 font-bold">
                <span className="text-gray-700  text-8xl">
                    Fee
                </span>
                <span className=" text-xl  text-gray-800">Pay</span>
            </h1>

            <div className="flex gap-6 items-center">
                {!user ? (
                    <Button onClick={login} text="Login" />
                ) : (
                    <Button
                        onClick={logout}
                        text="Logout"
                        className="bg-red-600"
                    />
                )}
            </div>
        </div>
    )
}

export default Topbar
