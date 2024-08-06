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

const MenuList = (props: any) => {
  const { userProfile } = props;

  return (
    <div className="scrollbar-hide flex w-full flex-col items-center gap-2  overflow-y-auto px-0 md:items-start md:px-6 ">
      {userProfile?.role === "Admin" ? (
        <NavLink url="/admin/home" title="Dashboard" Icon={LayoutDashboard} />
      ) : null}
      {userProfile?.role === "Admin" ? (
        <NavLink url="/admin/employees" title="Employees" Icon={Users} />
      ) : null}
      {userProfile?.role === "Admin" ? (
        <NavLink url="/admin/departments" title="Departments" Icon={Building} />
      ) : null}
      {userProfile?.role === "Admin" ? (
        <NavLink url="/admin/projects" title="Projects" Icon={Notebook} />
      ) : null}

      {userProfile?.role === "Manager" ? (
        <NavLink url="/manager/home" title="Dashboard" Icon={LayoutDashboard} />
      ) : null}
      {userProfile?.role === "Manager" ? (
        <NavLink url="/manager/projects" title="Projects" Icon={Notebook} />
      ) : null}

      {userProfile?.role === "Manager" ? (
        <NavLink url="/manager/timesheets" title="Timesheets" Icon={Clock} />
      ) : null}

      {userProfile?.role === "Manager" ? (
        <NavLink url="/manager/reports" title="Reports" Icon={LineChart} />
      ) : null}

      {userProfile?.role === "Employee" ? (
        <NavLink
          url="/employee/home"
          title="Dashboard"
          Icon={LayoutDashboard}
        />
      ) : null}

      {userProfile?.role === "Employee" ? (
        <NavLink url="/employee/helpdesk" title="Help Desk" Icon={Info} />
      ) : null}
      {userProfile?.role === "Employee" ? (
        <NavLink url="/employee/approvals" title="Approvals" Icon={Check} />
      ) : null}
      {userProfile?.role === "Employee" ? (
        <NavLink url="/employee/leaves" title="Leaves" Icon={CalendarCheck} />
      ) : null}
      {userProfile?.role === "Employee" ? (
        <NavLink url="/employee/timesheets" title="Timesheets" Icon={Clock} />
      ) : null}

      <NavLink url="/home/bookings" title="Bookings" Icon={Bookmark} />
    </div>
  );
};

export default MenuList;
