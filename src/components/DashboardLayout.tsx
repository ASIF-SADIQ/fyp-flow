import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <main className="ml-64 p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
