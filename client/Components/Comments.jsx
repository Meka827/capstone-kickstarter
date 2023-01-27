import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { commentState } from "../state";

const Comments = () => {

    const [comments, setComments] = useRecoilState(commentState)   


    useEffect(() => {
        fetch('http://localhost:3000/comments', {
            mode: "cors",
        })
        .then((res) => res.json())
        .then((data) => {
            setComments(data);
        });
    });
    

    return (
       <section>
        
       </section>
    );

};

export default Comments;