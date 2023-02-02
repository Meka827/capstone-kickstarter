import React from "react";
import NavBar from "./NavBar";
import Support from "./Support";

const obj = [
{
  id: 1,
  subTitle: "Pledge US$ 30 or more",
  title: "Pledge Manager Tier",
  decription: "Not sure what tier to get, or you only want add-ons? Back at this level and you will be in the pledge manager with a $30 credit that can be used toward add-ons and/or whatever tier you want (and shipping of course). You don't need to choose add-ons now.",
  includes: "",
  amount: 30
}
]

const Campaign = (props) => {
  return (
    <>
      <NavBar />
      <div className="campaign-container" >
      <div id="big-box">
        {/* creator bio below*/}
        {/* =================================================================*/}

        {/* story and explanation of kickstarter container below */}
        {/* =================================================================*/}
        <div>
          <div className="story-container">
            <div>Story</div>
            <div>
              <h1>
                <b>{props.campaign[0].title}</b>
              </h1>
              <div>{props.campaign[0].summary}</div>
            </div>
          </div>
          <div className="image" src={props.campaign[0].image}></div>
          <div className="feature-bullets">
            <ul>
              <li>{props.campaign[0].bullet_one}</li>
              <li>{props.campaign[0].bullet_two}</li>
              <li>{props.campaign[0].bullet_three}</li>
            </ul>
            <div>{props.campaign[0].bullet_flavor}</div>
          </div>
          <div className="image" src={props.campaign[0].image}></div>
          <div>
            <h1>
              <b>This Kickstart Features:</b>
              <ul>
                <li> *Several bullets & images here*</li>
              </ul>
            </h1>
          </div>
        </div>
        <div>
          <h1> Risks and Challenges </h1>
          <div>
            This is the first time we are doing extensive digital playtesting of
            a physical game before we go to print. I am VERY excited about how
            this will improve the quality of the final product, but I can't say
            for sure how many rounds of changes will be needed as we make
            improvements based on data from thousands of games played. The
            estimated delivery date for this Kickstarter is February 2024, but
            please keep in mind this is just an estimate. We will work hard to
            ship your game on time, but our number one concern is that this
            product turns out great. If we have to delay delivery to improve the
            product, we will. Recent changes to VAT and EU imports have slowed
            down delivery to our EU backers. We've had shipments held for
            inspection for extended periods and other logistic issues. EU
            backers should know such issues may cause your delivery to be
            delayed.
          </div>
          <h2> Refund Policy </h2>
          <div>
            Within 60 days of the end of this Kickstarter we offer refunds (no
            questions asked), your refund amount will be your full pledge less
            any non-refundable fees collected by Kickstarter. We do not fulfill
            refund requests after that date. If, for any reason, we are unable
            to fulfill any part of your order (I.E. add-ons), we will give you a
            FULL refund for what we weren’t able to fulfill. Refunds will be
            processed using the method of our choosing (usually PayPal).
          </div>
        </div>
      </div>
      <div className="creator-container">
          <div>
            <b>{props.creator[0].name}</b>
          </div>
          <div>
            {props.creator[0].created} created - {props.creator[0].backed} backed
          </div>
          <br></br>
          <div>{props.creator[0].bio}</div>
        </div>
      <div className="support-container" >
        {obj.map((obj => <Support key={obj.id} obj={obj} />))}
      </div>
      </div>
    </>
  );
};

export default Campaign;
