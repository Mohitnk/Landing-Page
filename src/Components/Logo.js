import React from "react";
import "./Logo.css";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { ImGooglePlus } from "react-icons/im";

function Logo() {
  return (
    <div>
      <div className="main-section">
        <h2>SUBSCRIBE</h2>
        <p className="para">to the newsletters and content update</p>
        <div className="btn">
          <input
            type="email"
            name="email"
            placeholder="Enter a valid Email Address"
          />
          <button>SUBMIT</button>
          <div className="sub">
            <div className="loca">
              <h3>LOCATION</h3>
              <p>28 Jackson Blvd Ste 1020 Chicago</p>
              <p>IL 60604-2340</p>
            </div>
            <div className="follow">
              <div>
                <h3>FOLLOW US</h3>
              </div>
              <div class="img-logo">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <BsTwitter />{" "}
                </span>
                <span>
                  <GrLinkedinOption />
                </span>
                <span>
                  <ImGooglePlus />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="aa">
            <div className="main-container">
              <div className="img-container">
                <img src="https://media.istockphoto.com/photos/love-my-new-furry-friend-picture-id1155678845?k=20&m=1155678845&s=612x612&w=0&h=JtFyIp7d7dkZXeIcdBxDc1yvlKN2f-D8ELOShOMzaEw=" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
