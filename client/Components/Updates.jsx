import React from 'react'
import NavBar from './NavBar'

const updates = [
    {
        id:1,
        summary: "Over 30 Promo Cards Unlocked, Art from Watery Graves, and more!",
        creator: "Robert Dougherty",
        header: "Amazing Start!",
        paragraph: "WOW,  we are off to an amazing start to this Kickstarter! Day 1 and Day 2 were both record setting days for Wise Wizard Games Kickstarters, and we continue to go strong! In Day 3, we've unlocked 3 more Stretch Goals. We've already unlocked an incredible 31 promo cards!!!",
        likes: 12,
        comments: 3,
        date: "2023-01-26"
    },
    {
        id:2,
        summary: "1,500+% Funded day one! THANK YOU BACKERS!",
        creator: "Robert Dougherty",
        header: "",
        paragraph: "Congrats on being part of our NEW first day funding record! Previously set by Star Realms Frontiers, you SMASHED the record by over $50,000!",
        likes: 31,
        comments: 6,
        date: "2023-01-25"
    }
]

const Updates = () => {
    // onClick ={showAllUpdates}
return (
    <>
    <NavBar />
        <section className="update-section">
            <button className ="btn" >All Updates</button>
            <p>Update #2</p>
            <h1>Over 30 Promo Cards Unlocked, Art from Watery Graves, and more!</h1>
            <div className="flex">
            {/* <img></img> */}
            <div  className ="name-date">
            {/* <p>{creator} <span>creator</span></p>
            <p>{date}</p> */}
            </div>
            </div>
        </section>
    </>
)
}

export default Updates