import React from 'react';

const Support = ({pledge}) => {
    const shippingInfo = 'Shipping (and VAT or sales taxes where applicable) will be charged after the campaign ends via the Pledge Manager.';

    const includes = pledge.includes.split(' * ');
    const includeArray = [];
    let id = 1
    for(let bullet of includes) {
        if (bullet !== ''){
        includeArray.push({
            id: id,
            string: bullet
        })
        id += 1;
    }
    }
    
    const includeList = includeArray.map(bullet => <li key={bullet.id} >{bullet.string}</li>)


  return (
    <>
        <div className='pledge_hover_group' >
            <div className='pledge_hover' >
                <div className='pledge_hover_content' >
                    <p>Select this reward</p>
                </div>
            </div>
            <div className='pledge_info' >
                <h2 className='pledge_amount' >
                    Pledge $ {pledge.amount} or more
                </h2>
                <h3 className='pledge_title' >{pledge.title}</h3>
                <div className='pledge_reward_description' >
                    <p>{pledge.description}</p>
                    <div>INCLUDES:</div>
                    <ul>
                        {includeList}
                    </ul>
                    <p>{shippingInfo}</p>
                    <a className='pledge_description_toggle' role='button' href="#">
                        <span className='toggle_less'>Less</span>
                        <span className='toggle_more' >More</span>
                    </a>
                </div>
                <div className="pledge__extra-info">
                    <div className="pledge__detail">
                        <span className="pledge__detail-label">Estimated delivery</span>
                        <span className="pledge__detail-info">
                            <time dateTime="2024-02-01" data-format="MMM YYYY" className="js-adjust-time">Feb 2024</time>
                        </span>
                    </div>
                    <div className="pledge__detail">
                        <span className="pledge__detail-label">Ships to</span>
                        <span className="pledge__detail-info">Anywhere in the world</span>
                    </div>
                </div>
                <div className="pledge__backer-stats">
                    <div className='pledge_backers' >271 backers</div>
                    <div className='pledge_addons' >Add-ons</div>
                </div>
                <div>
                    <form action="submit">
                        <div>
                            <label htmlFor="">Shipping destination</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <div>
                                <div>$</div>
                                <input type="text" defaultValue={pledge.amount} />
                            </div>
                        </div>
                        <div>
                            <button type="submit"></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}

export default Support;
