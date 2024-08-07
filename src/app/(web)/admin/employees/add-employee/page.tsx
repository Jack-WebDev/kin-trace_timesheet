"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export default function AddEmployee() {
  const router = useRouter();
  return (
    <div>
      <ArrowLeft onClick={() => router.back()} className="text-black cursor-pointer" />
      <h1>Add New Employee</h1>
    </div>
  )
}
