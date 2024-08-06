"use client";
import { clientApi } from "@/client/react";
import { ArrowLeft } from "lucide-react";
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
    <ArrowLeft onClick={() => router.back()} className="text-black cursor-pointer" />

        <h1>{user.name}</h1>
    </>
  );
}
