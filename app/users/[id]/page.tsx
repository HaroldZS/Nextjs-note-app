import { User } from "@interfaces/User";

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
      <div className="card lg:card-side bg-slate-400 shadow-xl ">
        <figure>
          <img src={avatar} alt="Album" />
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
