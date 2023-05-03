import React from "react";
import "./MovieReview.css";
import { MdLocalMovies } from "react-icons/md";
import { RatingStar } from "rating-star";
import { toast } from "react-hot-toast";

const MovieReview = ({ name, _id }: any) => {
  const [rating, setRating] = React.useState(0);

  const onRatingChange = (e: any) => {
    setRating(e);
  };
  const handleReviewSubmit = (e: any) => {
    e.preventDefault();
    const rate = rating;
    const userName = e.target.name.value;
    const review = e.target.message.value;
    const form = e.target;
    reviewAddToDatabase(rate, userName, review, _id, form);
  };

  // store user review in database
  const reviewAddToDatabase = (
    rate: number,
    userName: string,
    review: string,
    id: number,
    form: any
  ) => {
    const userReviews = { rate, userName, review, id };
    fetch("https://movie-hub-server.vercel.app/userReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          setRating(0);
          toast.success("Review submit");
        }
      });
  };

  const userReview = [
    {
      _id: 1,
      userName: "Jhon",
      rating: "4.5",
      review:
        "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
    },
    {
      _id: 2,
      userName: "Nich Jonas",
      rating: "4.0",
      review:
        "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
    },
    {
      _id: 3,
      userName: "Rohit Shetty",
      rating: "3.0",
      review:
        "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
    },
  ];
  return (
    <div className="movie_review">
      <h1>
        <MdLocalMovies />
        Review
      </h1>
      <div className="review-section">
        <div className="add-review">
          <h1>Review "{name}"</h1>
          <p>
            Write a review for this movie. It will be posted on this page. Thank
            you in advanced.
          </p>
          <p>Select Rating</p>
          <form onSubmit={handleReviewSubmit}>
            <RatingStar
              clickable
              maxScore={5}
              id="123"
              rating={rating}
              onRatingChange={onRatingChange}
            />
            <p>Your Name</p>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter Your Name"
            />
            <p>Message</p>
            <textarea
              name="message"
              placeholder="Give a short review"
            ></textarea>
            <input className="submit-btn" type="submit" value="Submit Review" />
          </form>
        </div>
        <div className="show-review">
          <h1>Review ({userReview.length})</h1>
          <div className="user-review">
            {userReview.map((review) => (
              <div className="review" key={review._id}>
                <div className="user_info">
                  <h2>{review.userName}</h2>
                  <h5>{review.review}</h5>
                </div>
                <h4>{review.rating}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieReview;
