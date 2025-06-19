import Logo from "@/Components/Logo";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="p-8 lg:px-24 bg-slate-400">
      <ul className="flex flex-row items-center justify-around text-white gap-x-32">
        <Logo />

        <li className="lg:flex hidden flex-row items-center justify-around gap-x-8">
          <li>
            <h4 className="font-bold text-xl ps-2">Links</h4>
            <ul className="flex flex-col">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/">Home</FooterLink>
            </ul>
          </li>

          <li>
            <h4 className="font-bold text-xl ps-2">Links</h4>
            <ul className="flex flex-col">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/">Home</FooterLink>
            </ul>
          </li>

          <li>
            <h4 className="font-bold text-xl ps-2">Links</h4>
            <ul className="flex flex-col">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/">Home</FooterLink>
            </ul>
          </li>
        </li>
      </ul>
      <p className="text-center pt-4">
        Developed by{" "}
        <a href="https://www.github.com/Pedraum1" target="_blank" className="underline">Pedrão</a>
      </p>
    </footer>
  );
}

function FooterLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
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
