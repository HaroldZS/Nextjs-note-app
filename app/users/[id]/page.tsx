import { User } from "@interfaces/User";
import Image from "next/image";

interface Params {
  id: number;
}

async function getUser(id: number): Promise<User> {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await res.json();
  return data;
}

async function UserPage({ params }: { params: Params }) {
  const { id, email, first_name, last_name, avatar } = await getUser(params.id);

  return (
    <div className="h-[calc(80vh-6rem)]">
      <div className="card lg:card-side bg-base-300 shadow-xl text-base-content">
        <figure>
          <Image src={avatar} height={100} width={100} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {id}. {first_name} {last_name}
          </h2>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
