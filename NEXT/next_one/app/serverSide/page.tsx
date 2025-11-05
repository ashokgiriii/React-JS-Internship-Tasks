import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Server Side Rendering",
  description: "This is Server Side Rendering",
};

export const dynamic = "force-dynamic";

interface UserName {
  title: string;
  first: string;
  last: string;
}

interface UserLogin {
  uuid: string;
}

interface User {
  name: UserName;
  login: UserLogin;
  email: string;
  picture: {
    large: string;
    thumbnail: string;
  };
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://randomuser.me/api/?results=10", {
    cache: "no-store",
    // cache: "force-cache",
  });
  const data = await response.json();
  return data.results;
};

const ServerSide = async () => {
  const users = await fetchUsers();

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-screen">
      <h1 className="text-2xl font-bold">Server Side Rendering</h1>
      <ul>
        {users.map((user) => (
          <li className="text-orange-400 text-2xl" key={user.login.uuid}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerSide;
