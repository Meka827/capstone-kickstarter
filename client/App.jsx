import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import { useRecoilState } from "recoil";
import { commentState } from "/state.js";
import { campaignState } from "/state";
import Faq from './components/Faq'
import Campaign from './components/Campaign'
import Community from './components/Community'
import Updates from './components/Updates'
import Comments from './components/Comment'
import NavBar from './components/NavBar';




const App = () => {
  const [campaign, setCampaign] = useRecoilState(campaignState);

// console.log(new Date)

    useEffect(() => {
        fetch("http://localhost:3000/projects", {
        mode:"cors",
       })
       .then((res) => res.json())
       .then(result => {
       });
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/campaign", {
           mode:"cors",
       })
       .then((res) => res.json())
       .then((result) => {
        setCampaign(result);
       });
    }, []) 
    
    useEffect(() => {
        fetch("http://localhost:3000/creator", {
           mode:"cors",
       })
       .then((res) => res.json())
       .then(result => {
       });
    }, [])

      /*======================================COMMENTS===========================================*/
  const [comments, setComments] = useRecoilState(commentState);

  useEffect(() => {
    fetch("http://localhost:3000/comments", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((comments) => {
        setComments(comments);
      });
  }, []);

  return (
    <>
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
