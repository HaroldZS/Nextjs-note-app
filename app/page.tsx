import { UserList } from "@components/UserList/UserList";
import { User } from "@components/User/User";
import { User as UserInterface } from "@interfaces/User";

async function fetchUsers(): Promise<UserInterface[]> {
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
          <User {...user} key={user.id} />
        ))}
      </UserList>
    </>
  );
}

export default HomePage;
