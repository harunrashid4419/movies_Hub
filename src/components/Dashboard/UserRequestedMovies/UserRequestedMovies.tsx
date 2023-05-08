import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

const UserRequestedMovies = () => {
  const movies: any = useLoaderData();

  return (
    <div className="py-12 px-4">
      <h1 className="font-bold text-2xl mb-5">Users all requested movies</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL.</th>
              <th>Poster</th>
              <th>Name</th>
              <th>Language</th>
              <th>Length</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          {movies.map((user: any, i: number) => (
            <tbody key={user._id}>
              <tr style={{ border: "1px solid #ffffff52" }}>
                <th>{i + 1}</th>
                <th style={{ width: "30px", height: "30px" }}>
                  <img src={user.poster} alt="movies poster" />
                </th>
                <td>{user?.movieName}</td>
                <td>{user?.language}</td>
                <td>{user?.length}</td>
                <td>{user?.year}</td>
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

export default UserRequestedMovies;
