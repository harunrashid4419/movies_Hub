import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const Users = () => {
  const users: any = useLoaderData();

  return (
    <div className="py-12 px-4">
      <h1 className="text-2xl mb-5 font-bold">All Users</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          {users.map((user: any, i: number) => (
            <tbody key={user._id}>
              <tr style={{ border: "1px solid #ffffff52" }}>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "start",
                    backgroundColor: 'transparent'
                  }}
                >
                  <AiFillDelete />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
