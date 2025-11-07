"use client";

import { useEffect, useState } from "react";
import Button from "@/src/components/ui/Button";
import { toast } from "react-hot-toast";

interface Fee {
    total: number;
}

interface Student {
    id: string;
    fee: Fee;
}

interface FeeSectionProps {
    id: string;
}

export default function FeeSection({ id }: FeeSectionProps) {
    const [student, setStudent] = useState<Student | null>(null);
    const [amount, setAmount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isPaying, setIsPaying] = useState(false);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await fetch(`http://localhost:3001/users/${id}`);
                if (!res.ok) throw new Error("Failed to fetch student data");

                const data = await res.json();
                setStudent(data);
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Unable to load student data.");
                toast.error("Unable to load student data.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchStudent();
    }, [id]);

    const handlePayment = async () => {
        if (!student) return;
        if (amount <= 0) return toast.error("Enter a valid amount.");
        if (amount > student.fee.total) return toast.error("Amount More than remaining fee.");

        const updatedFee = { total: student.fee.total - amount };

        try {
            setIsPaying(true);
            const res = await fetch(`http://localhost:3001/users/${student.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fee: updatedFee }),
            });

            if (!res.ok) throw new Error("Failed to update fee.");

            setStudent((prev) => prev && { ...prev, fee: updatedFee });
            setAmount(0);
            toast.success(" Payment successful!");
        } catch (err) {
            console.error("Payment error:", err);
            toast.error(" Payment failed. Please try again.");
        } finally {
            setIsPaying(false);
        }
    };

    if (isLoading) {
        return (
            <div className="bg-white p-4 rounded-xl shadow-md text-gray-600">
                Loading fee details...
            </div>
        );
    }

    if (error || !student) {
        return (
            <div className="bg-white p-4 rounded-xl shadow-md text-red-600">
                {error || "Student not found."}
            </div>
        );
    }

    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Fee Section</h2>

                <p className="text-lg text-gray-700">
                    <strong>Total Remaining Fee:</strong> Rs. {student.fee.total}
                </p>

                <div className="flex flex-col gap-3 mt-2">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder="Enter amount to pay"
                        className="border p-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <Button
                        onClick={handlePayment}
                        text={isPaying ? "Processing..." : "Pay Fee"}
                        className="mt-2 w-full p-4"
                    />
                </div>
            </div>
        </>
    );
}
