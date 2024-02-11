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
  const user = await getUser(params.id);

  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
    </div>
  );
}

export default UserPage;
