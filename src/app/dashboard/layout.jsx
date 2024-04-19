import { Poppins } from "next/font/google";
import { config } from "@/helpers/config";
import DashboardSidebar from "@/components/dashboard/dashboardSidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
    title: "KargaKarga Case",
    description: "Generated by create next app",
};
export default function DashboardLayout({ children }) {
  return (
      <section className={poppins.className}>
        <DashboardSidebar>
          {children}
        </DashboardSidebar>
        
      </section>
  )
}