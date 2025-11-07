"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import Button from "@/src/components/ui/Button"
import Input from "@/src/components/ui/Input"
import { StudentFormData } from "@/src/features/admin/@types/admin"
import { toast } from "react-hot-toast"

const AdminForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<StudentFormData>()

    const onSubmit = async (data: StudentFormData) => {
        setIsLoading(true)

        try {
            const newUser = {
                email: data.email,
                password: data.password,
                fullName: data.fullName,
                phone: data.phone,
                role: "student",
                fee: { total: data.totalFee },
            }

            const userResponse = await fetch("http://localhost:3001/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            })

            if (!userResponse.ok) throw new Error("Failed to create user")

            const createdUser = await userResponse.json()

            const newStudent = {
                userId: createdUser.id,
                name: data.fullName,
                class: data.className,
                rollNumber: data.rollNumber,
                age: data.age,
                section: data.section,
            }

            const studentResponse = await fetch("http://localhost:3001/students", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newStudent),
            })

            if (!studentResponse.ok) throw new Error("Failed to create student record")

            toast.success(`Student ${data.fullName} created successfully!`)
            reset()
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to create student"
            toast.error(message)
            console.error("Error creating student:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Create New Student</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Input
                                className="w-full"
                                type="text"
                                placeholder="Full Name"
                                {...register("fullName", {
                                    required: "Full name is required",
                                    minLength: { value: 3, message: "Name must be at least 3 characters" },
                                })}
                            />
                            {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                        </div>

                        <div>
                            <Input
                                className="w-full"
                                type="number"
                                placeholder="Age"
                                {...register("age", {
                                    required: "Age is required",
                                    min: { value: 5, message: "Age must be at least 5" },
                                    max: { value: 100, message: "Age must be less than 100" },
                                    valueAsNumber: true,
                                })}
                            />
                            {errors.age && <span className="text-red-500 text-sm">{errors.age.message}</span>}
                        </div>

                        <div>
                            <Input
                                className="w-full"
                                type="tel"
                                placeholder="Phone Number"
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: { value: /^[+]?[\d\s-()]+$/, message: "Invalid phone number" },
                                })}
                            />
                            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Account Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Input
                                className="w-full"
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" },
                                })}
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div>

                        <div>
                            <Input
                                className="w-full"
                                type="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                                })}
                            />
                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Academic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <Input
                                className="w-full"
                                type="text"
                                placeholder="Class (e.g., Bachelor)"
                                {...register("className", { required: "Class is required" })}
                            />
                            {errors.className && <span className="text-red-500 text-sm">{errors.className.message}</span>}
                        </div>

                        <div>
                            <Input
                                className="w-full"
                                type="text"
                                placeholder="Roll Number"
                                {...register("rollNumber", { required: "Roll number is required" })}
                            />
                            {errors.rollNumber && <span className="text-red-500 text-sm">{errors.rollNumber.message}</span>}
                        </div>

                        <div>
                            <Input
                                className="w-full"
                                type="text"
                                placeholder="Section (e.g., A)"
                                {...register("section", { required: "Section is required", maxLength: { value: 2, message: "Section should be 1-2 characters" } })}
                            />
                            {errors.section && <span className="text-red-500 text-sm">{errors.section.message}</span>}
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Fee Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Input
                                className="w-full"
                                type="number"
                                placeholder="Total Fee"
                                {...register("totalFee", { required: "Total fee is required", min: { value: 0, message: "Fee cannot be negative" }, valueAsNumber: true })}
                            />
                            {errors.totalFee && <span className="text-red-500 text-sm">{errors.totalFee.message}</span>}
                        </div>
                    </div>
                </div>

                <Button
                    text={isLoading ? "Creating Student..." : "Create Student"}
                    className="w-full p-4 text-lg"
                    type="submit"
                />
            </form>
        </div>
    )
}

export default AdminForm
