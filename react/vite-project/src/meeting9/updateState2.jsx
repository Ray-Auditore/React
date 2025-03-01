import { useState } from "react";

const UpdateStateWithMap = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alex", active: false },
    { id: 2, name: "Belva", active: false },
    { id: 3, name: "Chris", active: false },
  ]);

  const toggleActive = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <span>
              {user.name} - {user.active ? "Active" : "Inactive"}
            </span>
            <button
              onClick={() => toggleActive(user.id)}
              className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateStateWithMap;
