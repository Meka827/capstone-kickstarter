import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Faq from './components/Faq'
import Campaign from './components/Campaign'
// import Community from './components/Community'
// import Updates from './components/Updates'
// import Comments from './components/Comments'
import NavBar from './components/NavBar';




const App = () => {


    useEffect(() => {
        fetch("http://localhost:3000/projects", {
           mode:"cors",
       })
       .then((res) => res.json())
       .then(result => {
        console.log(result);
       });
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/campaign", {
           mode:"cors",
       })
       .then((res) => res.json())
       .then(result => {
        console.log(result);
       });
    }, []) 
    
    useEffect(() => {
        fetch("http://localhost:3000/creator", {
           mode:"cors",
       })
       .then((res) => res.json())
       .then(result => {
        console.log(result);
       });
    }, [])

  return (
    <>
    <Router>
    <Routes>
        <Route path='/' element={<NavBar />} />
        <Route path='/faq' element={<Faq />} />
        {/* <Route path='/updates' element={<Updates />} /> */}
        {/* <Route path='/comments' element={<Comments />} /> */}
        {/* <Route path='/community' element={<Community />} /> */}
    </Routes>
    </Router>
    </>
  );
}

export default App;
