import React from "react";
import NavBar from "./NavBar";
import Support from "./Support";



const Campaign = ({ campaign, pledge, creator }) => {
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
                <b>{campaign[0].title}</b>
              </h1>
              <div>{campaign[0].summary}</div>
            </div>
          </div>
          <div className="image" src={campaign[0].image}></div>
          <div className="feature-bullets">
            <ul>
              <li>{campaign[0].bullet_one}</li>
              <li>{campaign[0].bullet_two}</li>
              <li>{campaign[0].bullet_three}</li>
            </ul>
            <div>{campaign[0].bullet_flavor}</div>
          </div>
          <div className="image" src={campaign[0].image}></div>
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
            FULL refund for what we weren't able to fulfill. Refunds will be
            processed using the method of our choosing (usually PayPal).
          </div>
        </div>
      </div>
      <div className="creator-container">
          <div>
            <b>{creator[0].name}</b>
          </div>
          <div>
            {creator[0].created} created - {creator[0].backed} backed
          </div>
          <br></br>
          <div>{creator[0].bio}</div>
        </div>
      <div className="support-container" >
        {pledge.map((pledge => <Support key={pledge.id} pledge={pledge} />))}
      </div>
      </div>
    </>
  );
};

export default Campaign;
