import {atom} from "recoil"

export const campaignState = atom({
  key: "campaign",
  default: [],
});

export const commentState = atom({
  key: "comments",
  default: [],
});