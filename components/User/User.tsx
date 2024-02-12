"use client";
import Link from "next/link";
import Image from "next/image";
import { User } from "@/interfaces/User";

function User({ id, first_name, last_name, email, avatar }: User) {
  return (
    <Link href={`/users/${id}`} key={id}>
      <li className="bg-base-300 mb-2 p-4 rounded-md flex justify-between text-base-content">
        <div className="flex-grow">
          <h5 className="font-bold">
            {id} {first_name} {last_name}
          </h5>
          <p className="pr-5 text-sm">email: {email}</p>
        </div>
        <div className="w-12 h-12">
          <Image
            src={avatar}
            width={40}
            height={40}
            className="rounded-full w-20"
            alt="user avatar"
          />
        </div>
      </li>
    </Link>
  );
}

export { User };
