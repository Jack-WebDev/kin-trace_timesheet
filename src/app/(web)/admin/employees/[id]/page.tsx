"use client";
import { clientApi } from "@/client/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/packages/ui/breadcrumb";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
export default function Employee() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const queryId = typeof id === "string" ? id : "";

  const { data: user, error } = clientApi.user.getUser.useQuery(queryId, {
    enabled: !!queryId,
  });

  if (error) return <div>Error loading user data</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/admin/employees">All Employees</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{user.name} {user.surname}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* <ArrowLeft
        onClick={() => router.back()}
        className="cursor-pointer text-black"
      /> */}

      <h1>{user.name}</h1>
    </>
  );
}
