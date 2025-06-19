import Logo from "@/Components/Logo";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between p-8 bg-slate-400 text-white lg:px-[300px]">
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
