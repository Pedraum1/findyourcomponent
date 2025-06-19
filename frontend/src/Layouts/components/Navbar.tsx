import Logo from "@/Components/Logo";
import { Link } from "react-router";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useState } from "react";

export default function Navbar() {
  const [SidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="lg:flex hidden flex-row items-center justify-between p-8 bg-slate-400 text-white lg:px-[300px]">
        <Logo />
        <ul className="flex flex-row items-center justify-around gap-x-8 text-xl">
          <NavLink to="/">link</NavLink>
          <NavLink to="/">link</NavLink>
          <NavLink to="/">link</NavLink>
        </ul>
        <ul className="flex flex-row items-center justify-around gap-x-8">
          <NavLink to="/">Login</NavLink>
          <NavLink to="/">Registro</NavLink>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden flex flex-row items-center justify-between px-4 py-8 bg-slate-400 text-white">
        <Logo />
        <Breadcrumbs openSidebarFunction={openSidebar} />
      </nav>

      {/* Sidebar for Mobile Navbar */}
      {SidebarOpen ? <Sidebar closeSidebarFunction={closeSidebar} /> : ""}
    </>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="border-b border-transparent hover:border-white px-2"
      >
        {children}
      </Link>
    </li>
  );
}

function Breadcrumbs({
  openSidebarFunction,
}: {
  openSidebarFunction: () => void;
}) {
  return (
    <>
      <button className="border p-2 rounded-lg" onClick={openSidebarFunction}>
        <DensityMediumIcon className="text-white" />
      </button>
    </>
  );
}

function Sidebar({
  closeSidebarFunction,
}: {
  closeSidebarFunction: () => void;
}) {
  return (
    <>
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"
        onClick={closeSidebarFunction}
      ></div>

      {/* Sidebar Content */}
      <article
        className={`absolute top-0 left-0 w-[250px] h-screen bg-slate-400 text-white py-8 px-4 flex flex-col`}
      >
        <Logo/>
        <ul className="flex flex-col gap-y-4 mt-16 flex-grow">
          <NavLink to="/">link</NavLink>
          <NavLink to="/">link</NavLink>
          <NavLink to="/">link</NavLink>
          <NavLink to="/">link</NavLink>
        </ul>
        <ul className="flex flex-col gap-y-4">
          <NavLink to="/">Login</NavLink>
          <NavLink to="/">Registro</NavLink>
        </ul>
      </article>
    </>
  );
}
