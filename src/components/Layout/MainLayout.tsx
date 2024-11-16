import { ReactNode } from "react";
import Header from "../Header/Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-900">
      <Header />
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
};

export default MainLayout;
