"use client";

import StudentProfile from "@/src/features/student/components/StudentProfile";
import FeeSection from "@/src/features/student/components/FeeSection";
import { useParams } from "next/navigation";
import ProtectedRoute from "@/src/components/ui/auth/ProtectedRoute";
import { useEffect, useState } from "react";

type User = {
    id: string;
    fullName: string;
    email: string;
    role: string;
    fee: { total: number };
};

export default function StudentPage() {
    const params = useParams();
    const id = params?.id as string;
    const [student, setStudent] = useState<User | null>(null);

    useEffect(() => {
        if (!id) return;
        const fetchStudent = async () => {
            try {
                const res = await fetch(`http://127.0.0.1:3001/users/${id}`);
                if (!res.ok) throw new Error("Failed to fetch student");
                const data: User = await res.json();
                setStudent(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchStudent();
    }, [id]);

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gray-50 p-6">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Welcome {student ? student.fullName : "Student"}
                </h1>

                <div className="flex gap-4 flex-col w-1/2 m-auto">
                    {student && <StudentProfile id={student.id} />}
                    {student && <FeeSection id={student.id} />}
                </div>
            </div>
        </ProtectedRoute>
    );
}
