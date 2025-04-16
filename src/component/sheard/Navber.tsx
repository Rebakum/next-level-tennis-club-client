"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
const navlinks = [
  { href: "/", label: "Home" },
  { href: "/dashboard/members", label: "Members" },
  { href: "/dashboard/members/add", label: "Add Member" },
];

export default function Navber() {
  const pathname = usePathname();
  return (
    <nav className="mb-6 flex gap-6 bg-white shadow-md rounded-lg p-4">
      {navlinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={
            pathname == href
              ? "text-blue-600 font-bold"
              : "text-gray-800 hover:text-blue-500"
          }
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
