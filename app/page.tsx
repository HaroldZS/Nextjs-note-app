import { UserList } from "@components/UserList/UserList";
import { User } from "@components/User/User";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://reqres.in/api/users");
  const { data } = await res.json();
  return data;
}

async function HomePage() {
  const users = await fetchUsers();

  return (
    <>
      <UserList>
        {users.map((user) => (
          <User {...user} />
        ))}
      </UserList>
    </>
  );
}

export default HomePage;
