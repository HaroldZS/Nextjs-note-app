"use client";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar bg-slate-400">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          Home
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="#footer">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Navbar };
