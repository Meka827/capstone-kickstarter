import React from 'react';
import NavBar from './NavBar';
import { useState } from 'react';



const Updates = () => {
    const [updates, setUpdates] = useState([{
        id:1,
        update_number:"update #2",
        summary: "Over 30 Promo Cards Unlocked, Art from Watery Graves, and more!",
        creator: "Robert Dougherty",
        date: "2023-01-26",
        greeting:"Hi Backer",
        header: "Amazing Start!",
        paragraph: "WOW,  we are off to an amazing start to this Kickstarter! Day 1 and Day 2 were both record setting days for Wise Wizard Games Kickstarters, and we continue to go strong! In Day 3, we've unlocked 3 more Stretch Goals. We've already unlocked an incredible 31 promo cards!!!",
        paragraph_2:"We've designed a lot more promo cards for this Kickstarter. Spread the word and help us unlock them all! We would really appreciate it if you could tell your friends about Hero Realms Dungeons and share this Kickstarter on social media!",
        likes: 12,
        comments: 3
    },
    {
        id:2,
        update_number:"update #1",
        summary: "1,500+% Funded day one! THANK YOU BACKERS!",
        creator: "Robert Dougherty",
        date: "2023-01-25",
        greeting:"hello Dungeon Backers",
        header: "",
        paragraph: "Congrats on being part of our NEW first day funding record! Previously set by Star Realms Frontiers, you SMASHED the record by over $50,000!",
        likes: 31,
        comments: 6,
    }])

    const showAllUpdates = () =>{
        console.log("Clicked Worked");
    }

return (
    <>
    <NavBar />
        <section className="update-section">
        <div className ="update-container">
        <button className="btn" onClick={showAllUpdates}>All Updates</button>
        {
            updates.map((update) => (
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
            ))
        }
        </div>
        </section>
    </>
)
}

export default Updates;