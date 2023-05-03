import React, { useContext } from "react";
import "./RequestMovies.css";
import { AuthContext } from "../../../UserContext/UserContext";
import { toast } from "react-hot-toast";

const RequestMovies = () => {
  const { user }: any = useContext(AuthContext);
  const imageHostKey = "2ed74405c9982edbe45a4ac8ae219bfb";

  const handleSubmitMoviesInfo = (e: any) => {
    e.preventDefault();
    const name = e.target.userName.value;
    const movieName = e.target.movieName.value;
    const language = e.target.language.value;
    const length = e.target.length.value;
    const year = e.target.year.value;
    const plot = e.target.plot.value;
    const genra = e.target.genra.value;
    const form = e.target;
    const poster = e.target.poster.files[0];
    const formData = new FormData();
    formData.append("image", poster);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const poster = data.data.display_url;
        movieDetailsAddToDatabase(
          name,
          user?.email,
          movieName,
          language,
          length,
          year,
          plot,
          genra,
          poster,
          form
        );
      });
  };

  //   add to database

  const movieDetailsAddToDatabase = (
    name: string,
    email: any,
    movieName: string,
    language: string,
    length: any,
    year: number,
    plot: string,
    genra: string,
    poster: any,
    form: any
  ) => {
    const requestedMovies = {
      name,
      email,
      movieName,
      language,
      length,
      year,
      plot,
      genra,
      poster,
    };
    
    fetch("https://movie-hub-server.vercel.app/requestMovie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestedMovies),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast.success("Review submit");
        }
      });
  };

  return (
    <div className="container">
      <div className="request-section">
        <h1>Request a movie</h1>
        <form onSubmit={handleSubmitMoviesInfo}>
          <div className="flex-column">
            <div className="first-section">
              <p>Your Name</p>
              <input
                type="text"
                name="userName"
                defaultValue={user?.name}
                required
                placeholder="Jhon"
              />
            </div>
            <div className="second-section">
              <p>Your Email</p>
              <input
                type="email"
                required
                defaultValue={user?.email}
                readOnly
              />
            </div>
          </div>
          <div className="flex-column">
            <div className="first-section">
              <p>Movies Name</p>
              <input
                type="text"
                name="movieName"
                required
                placeholder="Avengers Endgame"
              />
            </div>
            <div className="second-section">
              <p>Language</p>
              <input
                type="text"
                name="language"
                required
                placeholder="English/Hindi/Bangla"
              />
            </div>
          </div>
          <div className="flex-column">
            <div className="first-section">
              <p>Hours</p>
              <input type="text" name="length" required placeholder="2h 44m" />
            </div>
            <div className="second-section">
              <p>Year</p>
              <input type="number" name="year" required placeholder="2015" />
            </div>
          </div>
          <p>Movies Plot</p>
          <textarea name="plot" required></textarea>
          <div className="flex-column">
            <div className="first-section">
              <p>Movies Poster</p>
              <input type="file" name="poster" required />
            </div>
            <div className="second-section">
              <p>Movie Category</p>
              <select required name="genra">
                <option>Romantice</option>
                <option>Action</option>
                <option>Adventure</option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Thiller</option>
                <option>Mystery</option>
                <option>Sci fi</option>
                <option>Horror</option>
              </select>
            </div>
          </div>
          <input className="submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default RequestMovies;
