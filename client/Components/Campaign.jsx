import React from "react";
import { useRecoilState } from "recoil";
import { campaignState } from "../state";
import { useEffect } from "react";
import NavBar from "./NavBar";

const Campaign = () => {
  const [campaign, setCampaign] = useRecoilState(campaignState);

  useEffect(() => {
    fetch("http://localhost:3000/campaign", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((result) => {
        setCampaign(result);
        console.log(result);
      });
  }, []);

  return (
    <>
    {/* <NavBar /> */}
    <NavBar />
    <div>
      <div className="campaign-container">
        <div>Story</div>
        <div>
          <h1>
            <b>{campaign.title}</b>
          </h1>
          <div>{campaign.summary}</div>
        </div>
      </div>
      <div className="image"></div>
      <div className="feature-bullets">
        <ul>
          <li>{campaign.bullet_one}</li>
          <li>{campaign.bullet_two}</li>
          <li>{campaign.bullet_three}</li>
        </ul>
        <div>{campaign.bullet_flavor}</div>
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
