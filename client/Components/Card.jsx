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
        {/* <div className='image'></div>
        <div className='location' ></div> */}
        <div className='project-header' >
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className ="card-grid">
        <div className ="video grid-item">
        <iframe width="800" height="480" src="https://www.youtube.com/embed/8ue30jwlq0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='pledge grid-item' >
            <div className='pledge-container'>
                <span className="pledge-amount" >
                    <h3>${pledge_amount}</h3>
                    <p>pledged of ${pledge_goal} goal</p>
                </span>
                <span className='backers' >
                    <h3>{backers}</h3>
                    <p>backers</p>
                </span>
                <span className='daystogo' >
                <h3>{difference}</h3>
                <p>days to go</p>
                </span>
                {/* <span className='goal-date' >
                    {goal_date}
                </span> */}
                {/* <span className='pledge-goal' >
                    <span className='money' >
                        pledged of ${pledge_goal} goal
                    </span>
                </span>
                <span className='backers-text' >
                    backers
                </span>
                <span className='daystogo-text' >days to go</span> */}
                <button type="button" className="btn"> <a href="">Back this project</a></button>
            <div className="btn-icons">
                <button className=" remind-me-btn btn">Remind me</button>
                <div className="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-solid fa-envelope"></i>
                <i class="fa-solid fa-code"></i>
                </div>
            </div>
            <p>
                <a href="#">All or nothing.  </a>
                This project will only be funded if it reaches its goal by {goal_date}.
            </p>
            </div>
        </div>
        {/* <div className='paragraph' ></div>
      </div>
      <div className='events' >
        <div className='events-grid' >
           <button type="button" className="btn"> <a href="">Back this project</a></button>
            <div></div>
            <p>
                <a href="">All or nothing.  </a>
                This project will only be funded if it reaches its goal by {goal_date}.
            </p>
        </div> */}
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
