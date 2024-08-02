
import React from "react";

export const Timeline = (props: any) => {
  const { activities } = props;

  return activities.length === 0 ? (
    <div className="flex w-full items-center justify-center p-4">
      <p className="text-textColorLight">Timeline empty</p>
    </div>
  ) : (
    <div className='after:top0 relative flex  w-max flex-col py-0 before:content-[""] after:absolute after:bottom-0 after:left-1/2 after:z-10 after:h-full  after:w-1 after:bg-primaryBg'>

    </div>
  );
};


