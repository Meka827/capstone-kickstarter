import React from 'react';

const Update = ({ update }) => {
  return (
<>
            <div className ="update-card">
            <p className = "update-number">{update.update_number}</p>
            <h1 className = "summary">{update.summary}</h1>
            <div className="flex">
                    <div className="name-date">
                        <p className = "creator">{update.creator} <span>Creator</span></p>
                        <p className = "date">{update.date}</p>
                    </div>
                    <p className="greeting">{update.greeting}</p>
                    <p>{update.paragraph}</p>
                    {/* <img></img> */}
                    <p>{update.paragraph_2}</p>
                    <footer className ="card-footer">
                            <div className ="update-flex">
                            <div className ="comments-likes">
                                <div className ="comments">{update.comments}</div>
                                <div className ="likes">{update.likes}</div>
                            </div>
                            <button className ="btn">Read More</button>
                            </div>
                    </footer>
                </div>
                </div>
                
</>
  );
}

export default Update;
