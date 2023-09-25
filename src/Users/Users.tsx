import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

type TUser = {
  id: number;
  name: string;
};

const Users: FC = () => {
  const [users, setUsers] = useState<[] | TUser[]>([]);

  const loadUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div data-testid="users-page">
      <div data-testid="test-div">
        {users.map(({ id, name }) => (
          <Link to={`/users/${id}`} data-testid="user-item" key={id}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
