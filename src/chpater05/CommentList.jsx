import React from "react";
import Comment from "./Comment";

const comments=[
    {
        name: "권희수",
        comment: "첫번째 댓글 작성~!",
    },
    {
        name: "권희수2",
        comment: "두번째 댓글 작성~!",
    },
    {
        name: "권희수3",
        comment: "세번째 댓글 작성~!",
    },
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
            
        </div>
    )
}

export default CommentList;