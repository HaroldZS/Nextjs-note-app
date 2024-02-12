import Image from "next/image";
import { User } from "@/interfaces/User";

function UserProfile({ id, first_name, last_name, email, avatar }: User) {
  return (
    <div className="card lg:card-side bg-base-300 shadow-xl text-base-content">
      <figure>
        <Image
          src={avatar}
          height={100}
          width={100}
          alt="Album"
          className="rounded-md lg:rounded-none"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {id}. {first_name} {last_name}
        </h2>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export { UserProfile };
