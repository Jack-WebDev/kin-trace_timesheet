import { formatDate } from "@/utils";
import { Bell } from "lucide-react";
import React from "react";
import { LinkButton } from ".";
import { Notification as NotificationType } from "@prisma/client";
import { serverApi } from "@/client/server";

export const Notification = async () => {
  const notifications = await serverApi.notification.list();

  return (
    <div className="relative flex  max-h-[500px] w-full flex-1 flex-col items-start rounded-lg bg-primaryBg p-8 shadow-lg md:w-2/5 md:max-w-[900px]">
      <div className="mb-8 flex w-full items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Bell
            size={40}
            className="rounded-full bg-secondary p-2 text-white"
          />
          <h1 className="text-lg font-semibold text-textColor">
            New notifications
          </h1>
        </div>

        <LinkButton url="/home/notifications" />
      </div>

      <div className="mb-3 flex w-full items-center border-b border-secondary px-2 pb-2 text-textColor">
        <span className="w-1/5 text-sm font-normal text-inherit">Category</span>
        <span className="w-1/5 text-sm font-normal text-inherit">Date</span>
        <span className="w-2/5 text-sm font-normal text-inherit">Message</span>
        <span className="w-1/5 text-sm font-normal text-inherit">Action</span>
      </div>

      <div className="max-h[300px] scrollbar-hide flex w-full flex-col gap-2 overflow-y-auto">
        {notifications && notifications.length > 0 ? (
          notifications.map((item: NotificationType) => (
            <NotificationItem key={item.id} notification={item} />
          ))
        ) : (
          <div className="flex w-full items-center justify-center py-4">
            <p className="text-md font-semibold text-textColorExtraLight">
              No notifications
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const NotificationItem = (props: NotificationItemProps) => {
  const { notification } = props;
  return (
    <div className="relative z-50 flex items-center gap-4 rounded-lg bg-secondaryBg px-2 py-1 text-textColor hover:bg-primary/20 hover:text-black dark:bg-secondaryBg/20 hover:dark:bg-[#6759d1]/20 dark:hover:text-white">
      <div
        className={
          notification.status === "New"
            ? "absolute bottom-0 left-0 top-0 -z-10 h-full w-1 rounded-bl-lg rounded-tl-lg bg-success p-0 "
            : ""
        }
      ></div>
      <span className="w-1/5 text-xs font-semibold text-inherit">
        {notification.category}
      </span>
      <span className="w-1/5 text-xs font-semibold text-inherit">
        {formatDate(notification.createdAt.toISOString(), true)}
      </span>
      <p className="w-2/5 text-xs font-semibold text-inherit">
        {notification.message.slice(0, 30)}...
      </p>
    </div>
  );
};

type NotificationItemProps = {
  notification: NotificationType;
};
