import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { commentState } from "../state";

const Comments = () => {
  const [comments, setComments] = useRecoilState(commentState);

  return (
    <section className="comments-section">
      <div className="py3">
        <div className="container-flex">
          <div className="row-comments">
            <div className="col-right">
              <div>
                <p>
                  <a>Have a question for the creator?</a>
                </p>
                <p></p>
              </div>
            </div>
            <div className="col-left">
              <div className="react-project-comments">
                <p className="backers">
                  Only backers can post comments.
                  <a
                    className="log"
                    href="/login?ref=comments&then=https%3A%2F%2Fwww.kickstarter.com%2Fprojects%2F1172937197%2Fhero-realms-dungeons%2Fcomments"
                  ></a>
                </p>
                <div>
                  <button className="new-comment-btn" type="button">
                    <span>Show 3 newer comments</span>
                  </button>
                </div>
                <ul className="comment-list">
                  <li className="list-item">
                    <div>
                      <div></div>
                      <div>
                        <div>
                          {comments.map((com) => {
                            // console.log(com.comment);
                            return (
                              <p className="data-comment-text" key={com.id}>
                                {com.comment}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
