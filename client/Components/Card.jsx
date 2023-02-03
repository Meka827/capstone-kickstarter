import React from 'react';

const project =   {
    id: 1,
    title: "Hero Realms Dungeons",
    description: "A new 80 card market deck, 6 new characters, and an all-new 12-encounter \ndungeon campaign for 1-5 players!",
    pledge_amount: 371523,
    pledge_goal: 20000,
    backers: 2479,
    goal_date: "2023-02-16T00:00:00.000Z"
  }

const Card = () => {

    const { id, title, description, pledge_amount, pledge_goal, backers, goal_date } = project;
    let currentDate = new Date;
    let goalDate = new Date(goal_date)
    let difference = Math.ceil((goalDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));

    

  return (
    <div>
      <div className='card-container'>
        <div className='image'></div>
        <div className='location' ></div>
        <div className='project-header' >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className='pledge' >
            <div className='pledge-container'>
                <span className="pledge-amount" >
                    ${pledge_amount}
                </span>
                <span className='backers' >
                    {backers}
                </span>
                <span className='daystogo' >{difference}</span>
                {/* <span className='goal-date' >
                    {goal_date}
                </span> */}
                <span className='pledge-goal' >
                    <span className='money' >
                        pledged of ${pledge_goal} goal
                    </span>
                </span>
                <span className='backers-text' >
                    backers
                </span>
                <span className='daystogo-text' >days to go</span>
            </div>
        </div>
        <div className='paragraph' ></div>
      </div>
      <div className='events' >
        <div className='events-grid' >
            <a href="">Back this project</a>
            <div></div>
            <p>
                <a href="">All or nothing.  </a>
                This project will only be funded if it reaches its goal by {goal_date}.
            </p>
        </div>
      </div>
      <div className='backer-trust'>
        <div className='bt-container'>
            <div>
                <div>
                    {/* {icon} */}
                    <div>
                        Kickstarter connects creators with backers to fund projects.
                    </div>
                </div>
            </div>
            <div>
                <div>
                    {/* {icon} */}
                    <div>
                        Rewards aren't guaranteed, but creators must regularly update backers.
                    </div>
                </div>
            </div>
            <div>
                <div>
                    {/* {icon} */}
                    <div>
                        You're only charged if the project meets its funding goal by the campaign deadline.
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
