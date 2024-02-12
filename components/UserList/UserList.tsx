"use client";
import { ReactNode } from "react";

function UserList({ children }: { children: ReactNode }) {
  return <ul>{children}</ul>;
}

export { UserList };
