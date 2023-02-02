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
                    to
                    <a className="green"> be constructive</a> --there's a human
                    behind this project.
                  </p>
                  <p>Have a question for the creator?</p>
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
                    {/* {comments.map((com) => {
                      return ( */}
                    <li className="list-item">
                      {comments.map((com) => {
                        return (
                          <div className="border-box">
                            <div className="commentor-info">
                              <div>
                                <img className="image" src={com.image}></img>
                                <div>
                                  <span className="user-name">
                                    <p className="user-name-text" key={com.id}>
                                      {com.name}
                                    </p>
                                  </span>
                                  <a></a>
                                </div>
                              </div>
                            </div>
                            <div className="comments">
                              <p className="data-comment-text" key={com.id}>
                                {com.comment}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </li>
                    {/* );
                    })} */}
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
