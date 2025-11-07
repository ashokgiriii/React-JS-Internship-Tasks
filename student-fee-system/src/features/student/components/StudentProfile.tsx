"use client";
import { useEffect, useState } from "react";

type Student = {
    id: string;
    name: string;
    email: string;
    role: string;
    fullName: string;
};

export default function StudentProfile({ id }: { id: string }) {
    const [student, setStudent] = useState<Student | null>(null);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (!id || id === "undefined") {
            setError("Invalid student ID");
            return;
        }

        const fetchStudent = async () => {
            try {
                const res = await fetch(`http://127.0.0.1:3001/users/${id}`);
                if (!res.ok) throw new Error("Failed to fetch student");
                const data: Student = await res.json();
                setStudent(data);
            } catch (err) {
                console.error("Error fetching student:", err);
                setError("Student not found");
            }
        };
        fetchStudent();
    }, [id]);

    if (error) {
        return (
            <div className="p-4 bg-white rounded shadow">
                <p className="text-red-600">{error}</p>
            </div>
        );
    }

    if (!student) return <p>Loading student profile...</p>;

    return (
        <div className="p-4 bg-white rounded shadow h-fit flex flex-col gap-2">
            <h2 className="text-xl font-semibold mb-2 border-b ">{student.fullName}</h2>
            <p className=" font-bold text-gray-800">Email: <span className="text-gray-700">
                {student.email}
            </span> </p>
            <p className=" font-bold text-gray-800">Role:  <span className="text-gray-700">
                {student.role}
            </span> </p>
        </div>
    );
}