import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../UserContext/UserContext";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";

const MyRequest = () => {
  const { user }: any = useContext(AuthContext);
  const { data: movies = [], refetch } = useQuery({
    queryKey: ["my-request"],
    queryFn: async () => {
      const res = await fetch(
        `https://movie-hub-server.vercel.app/myRequest?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  const setRequestedMovie = (id: number) => {
    const agree = window.confirm("Are you sure want to delete this request");
    if (agree) {
      fetch(`https://movie-hub-server.vercel.app/myRequest/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Delete sucessful!");
            refetch();
          }
        });
    }
  };

  return (
    <>
      {movies.length > 0 ? (
        <div className="py-12 px-4">
          <h1 className="font-bold text-2xl mb-5">My requested movies</h1>
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
                      onClick={() => setRequestedMovie(user._id)}
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
        <p className="text-2xl py-12 pl-5">No requested Movies here</p>
      )}
    </>
  );
};

export default MyRequest;
