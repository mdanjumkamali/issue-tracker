import React from "react";
import Link from "next/link";
import { FaBug } from "react-icons/fa";

export const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 h-14 items-center px-5">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-zinc-500 hover:text-zinc-800"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
