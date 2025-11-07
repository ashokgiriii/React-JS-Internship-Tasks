"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";
import { useAuthContext } from "@/src/context/Authcontext";

type LoginFormData = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const { login } = useAuthContext();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        try {
            await login(data.email, data.password);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <Input
                type="email"
                placeholder="Email"
                iconSrc="/user.svg"
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                    },
                })}
            />
            {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}

            <Input
                type="password"
                placeholder="Password"
                iconSrc="/password.svg"
                {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
            />
            {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}

            <Button
                text={isLoading ? "Logging in..." : "Login"}
                className="p-4"
                type="submit"
            />

        </form>
    );
};

export default LoginForm;
