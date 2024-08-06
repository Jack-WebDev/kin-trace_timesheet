import { serverApi } from "@/client/server";
import { PageHeader } from "@/components";
// import { DataTableColumnHeader } from "@/packages/ui";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/packages/ui/breadcrumb";
import { DataTablePagination } from "@/packages/ui/table/pagination";
import {DataTableColumnHeader} from "@/packages/ui/table/columnHeader"
import {DataTable} from "@/packages/ui/table/data-table"
import {DataTableViewOptions} from "@/packages/ui/table/dataTableViewOptions"


import { Building, Filter, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Department({
  params,
}: {
  params: { id: string };
}) {
  const department = await serverApi.department.getDepartment(params.id);
  const name = department?.name ?? " ";

  return (
    <div>
      {/* <PageHeader title={`${name} Department`} />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/admin/departments">All Departments</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{department?.name} Department</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb> */}

      <div className="bg-white rounded-xl">
        <div className="flex justify-between items-center">

        <div className="mb-8 flex w-[30%] items-center rounded-xl border border-gray-400 px-4 py-2">
          <Search />
          <input
            type="text"
            className="search-input border-none pl-4 text-xl outline-none"
            placeholder="Search by name or department"
          />
        </div>
        <div className="flex items-center gap-4">

        <button>Add New Employee</button>
        <div>
          <SlidersHorizontal/>
        </div>
        </div>
        </div>
        {/* <DataTableColumnHeader column={column} title="Name" /> */}
        
        {/* <DataTablePagination table={table} /> */}
        <div></div>
      </div>
    </div>
  );
}
