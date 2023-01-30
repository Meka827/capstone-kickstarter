import React from "react";
import { useRecoilState } from "recoil";
import { campaignState } from "../state";
import { useEffect } from "react";
import NavBar from "./NavBar";

const Campaign = () => {
  const [campaign, setCampaign] = useRecoilState(campaignState);

  return (
    <>
    {/* <NavBar /> */}
    <NavBar />
    <div>
      <div className="campaign-container">
        <div>Story</div>
        <div>
          <h1>
            <b>The Adventure Begins!</b>
          </h1>
          <div>
            If you are new to Hero Realms, Dungeons is a fantastic place to
            start. In this single box you get all the amazing gameplay Hero
            Realm has to offer!
          </div>
        </div>
      </div>
      <div className="image"></div>
      <div className="feature-bullets">
        <ul>
          <li>2-4 player PVP with basic decks</li>
          <li>
            2 player PVP with the included Alchemist and Barbarian Character
            packs.{" "}
          </li>
          <li>
            Solo and 2-player cooperative play through a 12-encounter dungeon
            adventure. Fight monsters, find treasure, choose and level up your
            skills and abilities! Adventure with up to 5 players using expansion
            packs, such as the ones in the Adventure Tier!
          </li>
        </ul>
        <div>
          We've packed a ton of awesome deckbuilding game fun into this box. You
          are going to love it!
        </div>
      </div>
      <div className="image"></div>
      <div>
        <h1>
          <b>This Kickstart Features:</b>
        </h1>
      </div>
    </div>
    </>
  );
};

export default Campaign;
