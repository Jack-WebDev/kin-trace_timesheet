'use client'
import { Button } from "@/packages/ui";
import { Eye, SquarePen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DeleteAction } from "./deleteAction";
import { UpdateDepartmentForm } from "@/modules/department/updateDepartment";


export const CrudActions = (props: ActionProps) => {
  const { id, url, edit, remove, view, partial, model } = props;

  return !partial ? (
    <div className="w-full flex items-center gap-4 justify-center">

      
        <UpdateDepartmentForm id={id} />
      

      {model && <DeleteAction actionId={id} model={model}/>}
    </div>
  ) : (
    <div className="w-full flex items-center gap-4 justify-center">
      {view && (
        <Link href={`${url}/${id}`}>
          <Button  className="h-fit w-fit px-2">
            <Eye size={25} className="text-black" />
          </Button>
        </Link>
      )}
      {edit && (
        <Button  className="h-fit w-fit px-2">
          <SquarePen size={25} className="text-black" />
        </Button>
      )}

      {remove && model && <DeleteAction actionId={id} model={model}/>}
    </div>
  );
};

type ActionProps = {
  id: string;
  url?: string;
  model?: string;
  edit?: boolean;
  remove?: boolean;
  view?: boolean;
  partial?: boolean;
};
