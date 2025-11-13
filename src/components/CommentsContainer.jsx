import React from "react";
import { FaUserCircle } from "react-icons/fa";
const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
   {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },

   {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
   {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
   {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data}) => {
  const { name, text, replies } = data;
  
  return (
    <div className="flex  bg-gray-100 m-5 p-2">
      <FaUserCircle className="text-3xl cursor-pointer" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        
      </div>
    </div>
  );
};

const CommentList = ({comments})=>{
    return comments.map((comment,index)=>(
   <div key={index}>
     <Comment  data={comment} />
     <div className=" border border-l-black ml-10">
     
         <CommentList comments={comment.replies} />
          
     </div>
   </div>))
}
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 shadow-sm  P-2 rounded-lg">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
