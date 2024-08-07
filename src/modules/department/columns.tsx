"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {

  DataTableColumnHeader,
} from "@/packages/ui";
import { CrudActions } from "@/components";
import { DepartmentsType } from "@/schema/department";

export const departmentColumns: ColumnDef<DepartmentsType>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
  },

  {
    accessorKey: "_count.User",
    header: ({column}) => {
        return <DataTableColumnHeader column={column} title="No. of Employees" />;
    },
  },
  {
    accessorKey: "_count.Project",
    header: ({column}) => {
        return <DataTableColumnHeader column={column} title="No. of Projects" />;
    },
  },
  {
    id: "actions",
    header: ({ column }) => {
      return <div className="w-full text-center">Actions</div>;
    },
    cell: ({ row }) => {
      const department = row.original;
      return (
        <div className="flex w-full items-center justify-center">
          <CrudActions
            id={department.id}
            url="/admin/departments"
            model="department"
            remove
            view
            edit
          />
        </div>
      );
    },
  },
];
