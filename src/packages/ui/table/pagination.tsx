import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import type { Table } from "@tanstack/react-table";

import { Button } from "..";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "..";
import React from "react";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex justify-between text-gray-700 dark:text-white w-1/2 min-w-max items-center space-x-6 lg:space-x-8 my-8">
    <div className="flex items-center space-x-2">
      <p className="hidden md:flex  text-sm font-medium">Rows per page</p>
      <Select
        value={`${table.getState().pagination.pageSize}`}
        onValueChange={(value) => {
          table.setPageSize(Number(value));
        }}
      >
        <SelectTrigger className="h-8 w-[70px] rounded-xl">
          <SelectValue placeholder={table.getState().pagination.pageSize} />
        </SelectTrigger>
        <SelectContent side="top" className="rounded-xl bg-white">
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
          <div className="grid gap-y-4 place-items-center">

    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        className="hidden h-8 w-8 p-0 lg:flex text-[#dda83a] border-[#dda83a] bg-transparent hover:bg-[#dda83a] hover:text-white rounded-[5px]"
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        <span className="sr-only">Go to first page</span>
        <DoubleArrowLeftIcon className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        className="h-8 w-8 p-0  text-[#dda83a] border-[#dda83a] bg-transparent hover:bg-[#dda83a] hover:text-white rounded-[5px]"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <span className="sr-only">Go to previous page</span>
        <ChevronLeftIcon className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        className="h-8 w-8 p-0  text-[#dda83a] border-[#dda83a] bg-transparent hover:bg-[#dda83a] hover:text-white rounded-[5px]"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <span className="sr-only">Go to next page</span>
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        className="hidden h-8 w-8 p-0 lg:flex  text-[#dda83a] border-[#dda83a] bg-transparent hover:bg-[#dda83a] hover:text-white rounded-[5px]"
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        <span className="sr-only">Go to last page</span>
        <DoubleArrowRightIcon className="h-4 w-4" />
      </Button>
    </div>
    <div className="hidden md:flex w-[100px] items-center justify-center text-sm font-medium">
      Page {table.getState().pagination.pageIndex + 1} of{" "}
      {table.getPageCount()}
    </div>
          </div>
  </div>
  );
}
