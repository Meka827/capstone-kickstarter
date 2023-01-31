import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import NavBar from "./NavBar";
import { campaignState } from "/state";


const Campaign = (props) => {
// const [campaign, setCampaign] = useState([]);


 
  return (
    <>
    {/* {console.log(props.campaign[0].title)} */}
    <NavBar />
    <div>
      <div className="campaign-container">
        <div>Story</div>
        <div>
          <h1>
            <b>{props.campaign[0].title}</b>
          </h1>
          <div>{props.campaign[0].summary}</div>
        </div>
       </div>
      <div className="image"></div>
      <div className="feature-bullets">
        <ul>
          <li>{props.campaign[0].bullet_one}</li>
          <li>{props.campaign[0].bullet_two}</li>
          <li>{props.campaign[0].bullet_three}</li>
        </ul>
        <div>{props.campaign[0].bullet_flavor}</div>
      </div>
      <div className="image"></div>
      <div>
        <h1>
          <b>This Kickstart Features:</b>
          <ul>
            <li> *Several bullets & images here*</li>
          </ul>
        </h1>
      </div>
    </div>
    </>
  );
};

export default Campaign;
