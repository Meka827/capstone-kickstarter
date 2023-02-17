import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route}from 'react-router-dom';
import { useRecoilState } from "recoil";
import { campaignState, commentState, creatorState, pledgeState } from "./state";
import Faq from './Components/Faq';
import Campaign from './Components/Campaign';
import Community from './Components/Community';
import Updates from './Components/Updates';
import Comments from './Components/Comment';
import TopNav from './Components/TopNav';



const App = () => {
  const [campaign, setCampaign] = useRecoilState(campaignState);
  const [creator, setCreator] = useRecoilState(creatorState);
  const [pledge, setPledge] = useRecoilState(pledgeState)

    useEffect(() => {
      
        fetch("/api/projects", {
        mode:"cors",
       })
       .then((res) => res.json())
       .then(result => {
       });
    }, [])

    useEffect(() => {
        fetch("/api/campaign", {
           mode:"cors",
       })
       .then((res) => res.json())
       .then((result) => {
        setCampaign(result);
       });
    }, []) 
    
    useEffect(() => {
        fetch("/api/creator", {
           mode:"cors",
       })
       .then((res) => res.json())
       .then(result => {
        setCreator(result)
       });
    }, [])

    useEffect(() => {
      fetch("/api/pledge", {
         mode:"cors",
     })
     .then((res) => res.json())
     .then(result => {
      setPledge(result)
     });
  }, [])

      /*======================================COMMENTS===========================================*/
  const [comments, setComments] = useRecoilState(commentState);

  useEffect(() => {
    fetch("/api/comments", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((comments) => {
        setComments(comments);
      });
  }, []);

  

  return (
    <>
    <TopNav />
    <Router>
    <Switch>
        <Route path='/' element={pledge.length !== 0 && campaign.length !== 0 && creator.length !== 0 && <Campaign pledge={pledge} campaign={campaign} creator={creator} />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/updates' element={<Updates />} />
        <Route path='/comments' element={<Comments comments={comments} />} />
        <Route path='/community' element={<Community />} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
