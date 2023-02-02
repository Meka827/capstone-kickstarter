import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import { useRecoilState } from "recoil";
<<<<<<< HEAD
import { commentState } from "/state.js";
import { campaignState } from "/state";
import Faq from './components/Faq'
import TopNav from './Components/TopNav';
import Campaign from './components/Campaign'
import Community from './components/Community'
import Updates from './components/Updates'
import Comments from './components/Comment'
=======
import { campaignState, commentState, creatorState} from "./state";
import Faq from './components/Faq';
import Campaign from './components/Campaign';
import Community from './components/Community';
import Updates from './components/Updates';
import Comments from './components/Comment';
>>>>>>> ed17892de678b3dbbd1bd23edeb5b3343b69ca87




const App = () => {
  const [campaign, setCampaign] = useRecoilState(campaignState);
  const [creator, setCreator] = useRecoilState(creatorState)
    useEffect(() => {
        fetch("/projects", {
        mode:"cors",
       })
       .then((res) => res.json())
       .then(result => {
       });
    }, [])

    useEffect(() => {
        fetch("/campaign", {
           mode:"cors",
       })
       .then((res) => res.json())
       .then((result) => {
        setCampaign(result);
       });
    }, []) 
    
    useEffect(() => {
        fetch("/creator", {
           mode:"cors",
       })
       .then((res) => res.json())
       .then(result => {
        setCreator(result)
        console.log(result)
       });
    }, [])

      /*======================================COMMENTS===========================================*/
  const [comments, setComments] = useRecoilState(commentState);

  useEffect(() => {
    fetch("/comments", {
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
        <Route path='/' element={campaign.length !== 0 && creator.length !== 0 && <Campaign campaign={campaign} creator={creator} />} />
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
