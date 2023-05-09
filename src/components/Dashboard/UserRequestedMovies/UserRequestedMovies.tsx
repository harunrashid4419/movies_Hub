import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

const UserRequestedMovies = () => {
  const movies: any = useLoaderData();
  const [requestMovie, setRequestedMovie] = useState(movies);

  const requestedDelete = (id: number) => {
    const agree = window.confirm(
      "Are you sure want to delete this requested movie"
    );
    if (agree) {
      fetch(`https://movie-hub-server.vercel.app/movieRequested/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Delete Successfull!");
            const remaningMovie = requestMovie.filter(
              (newMovie: any) => newMovie._id !== id
            );
            setRequestedMovie(remaningMovie);
          }
        });
    }
  };
  return (
    <>
      {requestMovie.length > 0 ? (
        <div className="py-12 px-4">
          <h1 className="font-bold text-2xl mb-5">
            Users all requested movies
          </h1>
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
              {requestMovie.map((user: any, i: number) => (
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
                      onClick={() => requestedDelete(user?._id)}
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "transparent",
                        marginTop: "25px",
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
      ) : (
        <p className="text-2xl py-12 px-5">No Requested Movies Here</p>
      )}
    </>
  );
};

export default UserRequestedMovies;
