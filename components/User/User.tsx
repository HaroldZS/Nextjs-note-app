"use client";
import Link from "next/link";
import Image from 'next/image';
import { User } from "@/interfaces/User";

function User({ id, first_name, last_name, email, avatar }: User) {
  return (
    <Link href={`/users/${id}`} key={id}>
      <li className="bg-base-300 mb-2 p-4 rounded-md flex justify-between text-base-content">
        <div>
          <h5 className="font-bold">
            {id} {first_name} {last_name}
          </h5>
          <p className="pr-5">email: {email}</p>
        </div>
        <Image src={avatar}  width={100} height={100} className="rounded-full w-20" alt="user avatar" />
      </li>
    </Link>
  );
}

export { User };
