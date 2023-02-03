import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import { useRecoilState } from "recoil";
import { commentState } from "/state.js";
import { campaignState } from "/state";
import Faq from './Components/Faq'
import TopNav from './Components/TopNav';
import Campaign from './Components/Campaign'
import Community from './Components/Community'
import Updates from './Components/Updates'
import Comments from './Components/Comment'




const App = () => {
  const [campaign, setCampaign] = useRecoilState(campaignState);

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
    <Routes>
        <Route path='/' element={campaign.length !== 0 && <Campaign campaign={campaign} />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/updates' element={<Updates />} />
        <Route path='/comments' element={<Comments comments={comments} />} />
        <Route path='/community' element={<Community />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
