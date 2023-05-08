import React from "react";
import "./MovieReview.css";
import { MdLocalMovies } from "react-icons/md";
import { RatingStar } from "rating-star";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const MovieReview = ({ name, _id }: any) => {
  const [rating, setRating] = React.useState(0);

  const { data: userReview = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(`https://movie-hub-server.vercel.app/reviews/${_id}`);
      const data = res.json();
      return data;
    },
  });

  const onRatingChange = (e: any) => {
    setRating(e);
  };
  const handleReviewSubmit = (e: any) => {
    e.preventDefault();
    const rate = rating;
    const userName = e.target.name.value;
    const review = e.target.message.value;
    const form = e.target;
    reviewAddToDatabase(rate, userName, review, _id, form, refetch);
  };

  // store user review in database
  const reviewAddToDatabase = (
    rate: number,
    userName: string,
    review: string,
    id: number,
    form: any,
    refetch: any
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
          refetch();
        }
      });
  };
  
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
          {userReview.length > 0 ? (
            <div className="user-review">
              {userReview.map((review: any) => (
                <div className="review" key={review._id}>
                  <div className="user_info">
                    <h2>{review.userName}</h2>
                    <h5>{review.review}</h5>
                  </div>
                  <h4>{review.rate}</h4>
                </div>
              ))}
            </div>
          ) : (
            <h6 className="no-review">No review here.</h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieReview;
