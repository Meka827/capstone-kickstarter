import React from 'react';




// &#x2022;

const Support = ({obj}) => {
    const shippingInfo = 'Shipping (and VAT or sales taxes where applicable) will be charged after the campaign ends via the Pledge Manager.'

  return (
    <>
        <li className='pledge_hover_group' >
            <div className='pledge_hover' >
                <div className='pledge_hover_content' >
                    <p>Select this reward</p>
                </div>
            </div>
            <div className='pledge_info' >
                <h2 className='pledge_amount' >
                    Pledge US$ {obj.amount} or more
                </h2>
                <h3 className='pledge_title' >{obj.title}</h3>
                <div className='pledge_reward_description' >
                    <p>{obj.decription}</p>
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
                                <input type="text" defaultValue={obj.amount} />
                            </div>
                        </div>
                        <div>
                            <button type="submit"></button>
                        </div>
                    </form>
                </div>
            </div>
        </li>
    </>
  );
}

export default Support;
