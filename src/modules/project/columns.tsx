"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {

  DataTableColumnHeader,
} from "@/packages/ui";
import { CrudActions } from "@/components";
import { ProjectsType } from "@/schema/project";

export const projectColumns: ColumnDef<ProjectsType>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Project Name" />;
    },
  },
  {
    accessorKey: "client",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Client Name" />;
    },
  },
  {
    accessorKey: "manager",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Project Supervisor" />;
    },
  },
  {
    accessorKey: "departmentId",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Department Name" />;
    },
  },
//   {
//     id: "departmentId",
//     header: ({ column }) => {
//       return <div className="w-full text-center">Actions</div>;
//     },
//     cell: ({ row }) => {
//       const department = row.original;
//       return (
//         <div className="flex w-full items-center justify-center">
//           <CrudActions
//             id={department.id}
//             url="/admin/departments"
//             model="department"
//             remove
//             view
//             edit
//           />
//         </div>
//       );
//     },
//   },


  {
    id: "actions",
    header: ({ column }) => {
      return <div className="w-full text-center">Actions</div>;
    },
    cell: ({ row }) => {
      const project = row.original;
      return (
        <div className="flex w-full items-center justify-center">
          <CrudActions
            id={project.id}
            url="/admin/projects"
            model="project"
            remove
            view
            edit
          />
        </div>
      );
    },
  },
];
