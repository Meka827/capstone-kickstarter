import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';


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
    <div>Hello World</div>
    <Router>
    <Routes>
        {/* <Route path='/' exact element={<Faq />} /> */}
        {/* <Route path='/campaign' element={<Campaign />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/updates' element={<Updates />} />
        <Route path='/comments' exact element={<Comments />} />
        <Route path='/community' exact element={<Community />} /> */}
    </Routes>
    </Router>
    </>
  );
}

export default App;
