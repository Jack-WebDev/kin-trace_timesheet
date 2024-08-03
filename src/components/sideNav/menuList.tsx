"use client";
import { NavLink } from "./NavLink";

import {
  Bookmark,
  Building,
  CalendarCheck,
  Check,
  Clock,
  Info,
  LayoutDashboard,
  LineChart,
  Notebook,
  Settings,
  Users,
} from "lucide-react";
import { clientApi } from "@/client/react";

const MenuList = () => {
  const { data: userProfile } = clientApi.user.me.useQuery();

  return (
    <div className="scrollbar-hide flex w-full flex-col items-center gap-2  overflow-y-auto px-0 md:items-start md:px-6 ">
      <NavLink url="/dashboard" title="Dashboard" Icon={LayoutDashboard} />

      {userProfile?.role === "Admin" ? (
        <NavLink url="/dashboard/employees" title="Employees" Icon={Users} />
      ) : null}
      {userProfile?.role === "Admin" ? (
        <NavLink
          url="/dashboard/departments"
          title="Departments"
          Icon={Building}
        />
      ) : null}
      {userProfile?.role === "Admin" ? (
        <NavLink url="/dashboard/projects" title="Projects" Icon={Notebook} />
      ) : null}

      {userProfile?.role === "Manager" ? (
        <NavLink url="/dashboard/projects" title="Projects" Icon={Notebook} />
      ) : null}

      {userProfile?.role === "Manager" ? (
        <NavLink url="/dashboard/timesheets" title="Timesheets" Icon={Clock} />
      ) : null}

      {userProfile?.role === "Manager" ? (
        <NavLink url="/dashboard/reports" title="Reports" Icon={LineChart} />
      ) : null}

      {userProfile?.role === "Employee" ? (
        <NavLink url="/dashboard/helpdesk" title="Help Desk" Icon={Info} />
      ) : null}
      {userProfile?.role === "Employee" ? (
        <NavLink url="/dashboard/approvals" title="Approvals" Icon={Check} />
      ) : null}
      {userProfile?.role === "Employee" ? (
        <NavLink url="/dashboard/leaves" title="Leaves" Icon={CalendarCheck} />
      ) : null}
      {userProfile?.role === "Employee" ? (
        <NavLink url="/dashboard/timesheets" title="Timesheets" Icon={Clock} />
      ) : null}

      <NavLink url="/dashboard/bookings" title="Bookings" Icon={Bookmark} />

      <NavLink url="/dashboard/settings" title="Settings" Icon={Settings} />
    </div>
  );
};

export default MenuList;
