import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { commentState } from "../state";
import NavBar from "./NavBar";

const Comments = () => {
  const [comments, setComments] = useRecoilState(commentState);

  return (
    <>
      <NavBar />
      <section className="comments-section">
        <div className="py3">
          <div className="container-flex">
            <div className="row-comments">
              <div className="col-right">
                <div className="border-left">
                  <p className="type-14">
                    This is your space to offer support and feedback. Remember
                    to <a className="green"> be constructive</a> - there's a
                    human behind this project.
                  </p>
                  <p className="type-15">Have a question for the creator?</p>
                  <div className="faq-link">
                    <a>Check this project's FAQ</a>
                  </div>
                </div>
              </div>
              <div className="col-left">
                <div className="react-project-comments">
                  <p className="backers">
                    Only backers can post comments.
                    <a className="log"> Log in</a>
                  </p>
                  {/* <div>
                    <button className="new-comment-btn" type="button">
                      <span>Show 3 newer comments</span>
                    </button>
                  </div> */}
                  <ul className="comment-list">
                    {comments.map((key) => {
                      return (
                        <li className="list-item" key={key.id}>
                          {/* {comments.map((com) => {
                            return ( */}
                          <div className="border-box">
                            <div className="commentor-info">
                              <div className="comm">
                                <img className="image" src={key.image}></img>
                                <div>
                                  <span className="user-name-text" key={key.id}>
                                    {key.name}
                                  </span>
                                  <a className="comment-link">
                                    <time className="time">{key.time}</time>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="comments">
                              <div className="w100">
                                <p className="data-comment-text" key={key.id}>
                                  {key.comment}
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* );
                          })} */}
                        </li>
                      );
                    })}
                    ;
                  </ul>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comments;
