"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import CustomToast from "../components/ui/CustomToast";

type User = {
    id: string;
    email: string;
    password: string;
    role: string;
};

type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
            if (!response.ok) throw new Error("Failed to fetch users");

            const users: User[] = await response.json();
            if (!users.length) {
                toast.error("Invalid email or password");
                return;
            }

            const loginUser = users[0];
            localStorage.setItem("loggedInUser", JSON.stringify(loginUser));
            setUser(loginUser);

            toast.success(`Welcome back, ${loginUser.email}!`);

            if (loginUser.role === "admin") router.push("/admin");
            else router.push(`/profile/${encodeURIComponent(loginUser.id)}`);
        } catch (err) {
            toast.error("Unable to login. Please check your server.");
            console.error("Login error:", err);
        }
    };

    const logout = () => {
        localStorage.removeItem("loggedInUser");
        setUser(null);
        toast.success("Logged out successfully!");
        router.push("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <CustomToast />
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuthContext must be used within an AuthProvider");
    return context;
};
