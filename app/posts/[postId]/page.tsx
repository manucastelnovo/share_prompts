import React from "react";

// async function getUser(id:string) {
//   const user = await fetch (`https://localhost:3000/api/users/${id}`);
//   return user.json();
// }

export async function generateMetadata({ params }: { params: { postId: string } }) {
  
  return {
    title: `Post ${params.postId}`,
  }
}

const page = ({ params }: { params: { postId: string } }) => {
  return <div>{params.postId}</div>;
};

export default page;
