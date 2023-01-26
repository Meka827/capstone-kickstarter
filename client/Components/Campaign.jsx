import React from "react";
import { useRecoilState } from "recoil";
import { campaignState } from "../state";

const obj = {
  project_id: 1,
  creator_id: 1,
  title: "Hero Realms Dungeons",
  image: "images/hero-realms.png",
  summary:
    "A new 80 card market deck, 6 new characters, and an all-new 12-encounter \ndungeon campaign for 1-5 players!",
};

const Campaign = () => {
  const [campaign, setCampaign] = useRecoilState(campaignState);

  setCampaign(obj);

  //   useEffect(() => {
  //     fetch(`http://localhost:3000/campaign/${id}`, {
  //       mode: "cors",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCampaign(data);
  //       });
  //   }, []);

  return <div>{campaign}</div>;
};

export default Campaign;
