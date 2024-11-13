import BreadCrumbs from "@/app/components/Breadcrumbs";
import { User } from "@nextui-org/react";
import DashBoardSideNav from "../../components/dashBoard/SideNav";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-60">
        <DashBoardSideNav />
      </div>

      <div className="flex-grow p-3 md:overflow-y-auto md:p-12">
        <div className="hidden md:block">
          <div className="w-full h-16 bg-pink-50 rounded flex justify-between items-center px-4">
            <div>
              <BreadCrumbs />
            </div>

            <div>
              <User
                name="Jerin Jaman"
                description="jerinjaman.dev@gmail.com"
                avatarProps={{
                  src: "https://i.ibb.co.com/SBXcCpq/jerin.jpg",
                }}
              />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
export default DashBoardLayout;