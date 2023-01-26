import React from "react";
import { useRecoilState } from "recoil";
import { campaignState } from "../state";

const Campaign = () => {

const [campaign, setCampaign] = useRecoilState(campaignState)   


  useEffect(() => {
    fetch(`http://localhost:3000/campaign/${id}`, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setCampaign(data);
      });
  }, []);



  return (
<div></div>
  );

};

export default Campaign;
