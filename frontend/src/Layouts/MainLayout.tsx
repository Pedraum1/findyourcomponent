import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow mx-auto lg:w-2/3 lg:px-0 px-4 w-full py-8">
        {<Outlet />}
      </main>
      
      <Footer />
    </div>
  );
}
