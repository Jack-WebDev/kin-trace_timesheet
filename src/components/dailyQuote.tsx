"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,

  DialogHeader,
  DialogTitle,
} from "@/packages/ui/dialog";

import { getDailyQuote } from "@/utils/getDailyQuote";

const HOURS_15 = 15 * 60 * 60 * 1000;

export function DailyQuote() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lastShownTime = localStorage.getItem("lastDialogShownTime");
    const currentTime = new Date().getTime();

    if (!lastShownTime || currentTime - parseInt(lastShownTime) > HOURS_15) {
      setOpen(true);
      localStorage.setItem("lastDialogShownTime", currentTime.toString());
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-[#015a4a]">Quote of the Day</DialogTitle>
        </DialogHeader>
        <>
          <h1><blockquote><q>{getDailyQuote()}</q></blockquote></h1>
        </>
      </DialogContent>
    </Dialog>
  );
}
