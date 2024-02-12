"use client";
import Link from "next/link";
import { User } from "@/interfaces/User";

function User({ id, first_name, last_name, email, avatar }: User) {
  return (
    <Link href={`/users/${id}`} key={id}>
      <li className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between">
        <div>
          <h5 className="font-bold">
            {id} {first_name} {last_name}
          </h5>
          <p className="text-slate-100 pr-5">email: {email}</p>
        </div>
        <img src={avatar} className="rounded-full w-20" alt="user avatar" />
      </li>
    </Link>
  );
}

export { User };
