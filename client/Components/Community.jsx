import React from "react";
import NavBar from "./NavBar";

const cities = [
  {
    id: 1,
    city: "Montreal",
    country: "Canada",
    backers: "74 backers",
  },
  {
    id: 2,
    city: "London",
    country: "United Kingdom",
    backers: "63 backers",
  },
  {
    id: 3,
    city: "Seattle",
    country: "United States",
    backers: "40 backers",
  },
  {
    id: 4,
    city: "Los Angeles",
    country: "United States",
    backers: "37 backers",
  },
  {
    id: 5,
    city: "Melbourne",
    country: "Australia",
    backers: "35 backers",
  },
  {
    id: 6,
    city: "Sydney",
    country: "Australia",
    backers: "29 backers",
  },
  {
    id: 7,
    city: "Chicago",
    country: "United States",
    backers: "29 backers",
  },
  {
    id: 8,
    city: "Toronto",
    country: "Canada",
    backers: "27 backers",
  },
  {
    id: 9,
    city: "Copenhagen",
    country: "Denmark",
    backers: "26 backers",
  },
  {
    id: 10,
    city: "Indianapolis",
    country: "United States",
    backers: "26 backers",
  },
];

const country = [
  {
    id: 1,
    country: "United States",
    backers: "2,227 backers",
  },
  {
    id: 2,
    country: "Canada",
    backers: "331 backers",
  },
  {
    id: 3,
    country: "United Kingdom",
    backers: "250 backers",
  },
  {
    id: 4,
    country: "Germany",
    backers: "199 backers",
  },
  {
    id: 5,
    country: "France",
    backers: "128 backers",
  },
  {
    id: 6,
    country: "Australia",
    backers: "125 backers",
  },
  {
    id: 7,
    country: "Netherlands",
    backers: "99 backers",
  },
  {
    id: 8,
    country: "Denmark",
    backers: "59 backers",
  },
  {
    id: 9,
    country: "Spain",
    backers: "56 backers",
  },
  {
    id: 10,
    country: "Belgium",
    backers: "52 backers",
  },
];

const Community = () => {
  return (
    <>
      <NavBar />
      <section className="community">
        <div className="hero-section">
          <div className="hero">
            <div className="hero-container">
              <div className="hero-title">
                3,922 people are supporting Robert Dougherty
              </div>
            </div>
          </div>
          <div className="comm-locations">
            <div className="locations-containers">
              <div className="locations-row">
                <div className="colu-left">
                  <div className="locations-cities">
                    <div className="subtitle">Where Backers Come From</div>
                    <div className="primary-title"> Top Cities </div>
                    <div className="location-wrapper">
                      <div className="city-list">
                        {cities.map((cit) => {
                          return (
                            <div key={cit.id} className="location-list-item">
                              <div className="left">
                                <div className="primary">
                                  <a className="a-tag">{cit.city}</a>
                                </div>
                                <div className="secondary">
                                  <a className="a-tag">{cit.country}</a>
                                </div>
                              </div>
                              <div className="right">
                                <div className="tertiary">{cit.backers}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="colu-right">
                  <div className="locations-countries">
                    <div className="subtitle">Where Backers Come From</div>
                    <div className="primary-title">Top Countries</div>
                    <div className="location-wrapper">
                      <div className="country-list">
                        {country.map((con) => {
                          return (
                            <div key={con.id} className="location-list-item">
                              <div className="left">
                                <div className="primary">
                                  <a className="a-tag">{con.country}</a>
                                </div>
                              </div>
                              <div className="right">
                                <div className="tertiary">{con.backers}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="existing">
            <div className="new-container">
              <div className="new-row">
                <div className="new-col">
                  <div className="newfix">
                    <div className="new-backers">
                      <h5>New Backers</h5>
                      <div className="backer-count">229</div>
                      <div className="backer-description">
                        backers had never backed a project on Kickstarter before
                      </div>
                    </div>
                    <div className="existing-backers">
                      <h5>Returning Backers</h5>
                      <div className="backer-count">3,942</div>
                      <div className="backer-description">
                        backers had backed a project on Kickstarter before
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
