import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const DashboardLayout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <main className={`${isMobile ? "p-4 pt-16" : "ml-64 p-6 lg:p-8"}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
