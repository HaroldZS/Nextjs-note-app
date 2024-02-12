"use client";
import { ReactNode } from "react";

function UserList({ children }: { children: ReactNode }) {
  return <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">{children}</ul>;
}

export { UserList };
