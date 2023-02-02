import {atom} from "recoil"

export const campaignState = atom({
  key: "campaign",
  default: [],
});

export const commentState = atom({
  key: "comments",
  default: [],
});

export const creatorState = atom({
  key: "creator",
  default: [],
});

export const pledgeState = atom({
  key: "pledge",
  default: [],
});
