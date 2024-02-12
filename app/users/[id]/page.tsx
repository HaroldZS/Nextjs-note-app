import { UserProfile } from "@/components/UserProfile/UserProfile";
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
    <div className="min-h-[calc(80vh-6rem)]">
      <UserProfile {...user} />
    </div>
  );
}

export default UserPage;
