"use client";

import React, { useState } from "react";
import { Bell, AlignLeft, BellIcon, ListChecks, Mail, MessageCircleWarning } from "lucide-react";

import { ThemeToggle } from "./ThemeToggler";
import {
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Label,
  Textarea,
} from "@/packages/ui";
import { usePathname } from "next/navigation";
import { PageHeader } from "..";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  Loader,
} from "@/packages/ui";
import { LinkIconButton } from "../LinkButton";
import type { NotificationType } from "@/schema";
import { clientApi } from "@/client/react";
import { UiContextType, useUiStateContext } from "@/context";
import { capitalizeWord } from "@/utils/capitalize";

export function TopNav() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const location = pathSegments[2] ?? pathSegments[1];
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const { toggleMenu } = useUiStateContext();

  const { data: userProfile, isLoading, error } = clientApi.user.me.useQuery();

  if (error) {
    return null;
  }

  return (
    <div className="sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-[#dda73a17] px-2 pb-4 pt-8 md:px-6">
      <div className="flex items-center gap-4">
        <AlignLeft
          size={40}
          className="cursor-pointer text-gray-500"
          onClick={toggleMenu}
        />
        <PageHeader
          title={capitalizeWord(location!) ?? ""}
          description={`All ${capitalizeWord(location!)} Information`}
          name={userProfile?.name}
        />
      </div>
      <div className="flex items-center gap-4">
        {isLoading ? (
          <Loader size="xs" className="h-10 w-10 min-w-0 border-[#dda83a]" />
        ) : (
          <>
            <div className="max-w-[100px]">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="relative flex h-fit w-fit cursor-pointer">
                    <Mail className="relative bottom-0 left-0 right-0 top-0 h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <Badge className="absolute right-[-5px] top-[-10px] flex h-4 w-4 items-center justify-center rounded-full bg-[#015a4a] p-0 text-xs font-normal text-white">
                      0
                    </Badge>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-1 w-48 bg-white p-0 dark:bg-[#1a1c1e]">
                  <DropdownMenuItem className="w-full p-0">
                    <LinkIconButton
                      title="Notifications"
                      link={true}
                      url={`/home/notifications/${userProfile?.id}`}
                      Icon={Mail}
                      badge={true}
                      badgeValue={notifications.length}
                      badgeVariant="inbox"
                    />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-x-2 text-black"><MessageCircleWarning/> Report</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Bug Report</DialogTitle>
                  <DialogDescription>
                    Your report will help us improve NewDawn360. Please be as
                    detailed as possible.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="message">Your bug report:</Label>
                    <Textarea
                      placeholder="Type here......"
                      id="message"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Submit Report</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
    </div>
  );
}
