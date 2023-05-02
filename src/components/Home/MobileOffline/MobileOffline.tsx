import React from "react";
import MobileImg from "../../../assets//mobile.png";
import "./MobileOffline.css";
import { FaRegUser } from "react-icons/fa";

const MobileOffline = () => {
  return (
    <div className="container">
      <div className="mobile-offline">
        <div className="content">
          <h1>Download Your Movies Watch Offline.</h1>
          <h1>Enjoy On Your Mobile App.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            perspiciatis ducimus id reiciendis a reprehenderit exercitationem,
            sit voluptatem ipsam amet provident totam dolore alias rerum
            veritatis. Quod, consequatur eligendi ducimus, doloribus error
            nostrum fuga id quidem ipsam voluptas saepe nesciunt.
          </p>
          <div className="end-content">
            <h4>HD 4K</h4>
            <h5> <FaRegUser /> 1.2K</h5>
          </div>
        </div>
        <div className="img">
          <img src={MobileImg} alt="mobile app img" />
        </div>
      </div>
    </div>
  );
};

export default MobileOffline;
