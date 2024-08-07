"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/packages/ui/breadcrumb";
import Link from "next/link";
export default function AddEmployee() {
  const router = useRouter();
  return (
    <div>
            <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/admin/employees">All Employees</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Add New Employee</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* <ArrowLeft onClick={() => router.back()} className="text-black cursor-pointer" /> */}
      <h1>Add New Employee</h1>
    </div>
  )
}
