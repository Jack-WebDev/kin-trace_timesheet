"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { castArray } from "lodash";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  DataTableColumnHeader,
} from "@/packages/ui";
import type { UserType } from "@/schema";
import { CrudActions } from "@/components";

export const userColumns: ColumnDef<UserType>[] = [
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="User" />;
    },

    cell: ({ row }) => {
      const user = row.original;
      const avatarFallBack = user?.name.slice(0, 1) + user?.surname.slice(0, 1);

      return (
        <div className="flex w-full items-center gap-4">
          <Avatar>
            <AvatarFallback className="bg-gray-200 p-4 font-normal text-black dark:bg-[#252729] dark:text-gray-400">
              {avatarFallBack || "U"}
            </AvatarFallback>
          </Avatar>

          <p className="text-sm font-semibold ">
            {user.name + " " + user.surname}
          </p>
        </div>
      );
    },
  },

  {
    accessorKey: "email",
    header: ({ column }) => {

      return <DataTableColumnHeader column={column} title="Email" />;
    },
  },
  {
    accessorKey: "department",
    header: ({ column }) => {



      return <DataTableColumnHeader column={column} title="Department" />;
    },
    cell: ({ row }) => {
      const department = row.original.department;
      return (
        <div className="flex w-full items-center gap-4">


          <p className="text-sm font-semibold ">
            {department?.name}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "position",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Position" />;
    },
  },
  {
    accessorKey: "employeeType",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Employee Type" />;
    },
    cell: ({ row }) => {
      const employeeType: string = row.getValue("employeeType");
      const getBadgeColor = (employeeType: string) => {
        switch (employeeType) {
          case "Contract":
            return "bg-blue-500 text-white";
          case "Full_Time":
            return "bg-green-500 text-white";
          case "Part_Time":
            return "bg-yellow-500 text-white";
          case "Intern":
            return "bg-gray-500 text-white";
          default:
            return "bg-gray-200 text-black";
        }
      };
      return (
        <Badge className={`${getBadgeColor(employeeType)}`}>
          <p className="text-xs">{employeeType}</p>
        </Badge>
      );
    },
  },

  {
    accessorKey: "status",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
    },
    cell: ({ row }) => {
      const status: string = row.getValue("status");
      return (
        <Badge variant={status === "Active" ? "success" : "danger"}>
          <p className="text-xs">{status}</p>
        </Badge>
      );
    },
  },

  {
    id: "actions",
    header: ({ column }) => {
      return <div className="w-full text-center">Actions</div>;
    },
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex w-full items-center justify-center">
          <CrudActions
            id={user.id}
            url="/admin/employees"
            model="user"
            partial
            remove
            view
          />
        </div>
      );

      //You can access the row data using row.original in the cell function.
      //Use this to handle actions for your row eg. use the id to make a DELETE call to your API
    },
  },
];
