import Logo from "@/Views/Components/Logo";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="p-8 px-24 bg-slate-400">
      <ul className="flex flex-row items-center justify-around text-white gap-x-32">
        <Logo />

        <li className="flex flex-row items-center justify-around gap-x-8">

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
