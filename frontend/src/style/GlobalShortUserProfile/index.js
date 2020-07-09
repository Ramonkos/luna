import styled from "styled-components";
import React from "react";

export const UserDetailContainer = styled.div`
  height: 66.5px;
  width: 300px;
  display: flex;
  flex-direction: row;
  margin-bottom: 0;
  
  img {
    height: 66.5px;
    width: 66px;
    border-radius: 0;
  }
  
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

      h1 {
          height: 23px;
          margin-top: 10px;
          margin-left: 16px;
          /* margin-left: 7.73px; */
          margin-bottom: 0;
          
          color: #E47D31;
          font-family: Helvetica,serif;
          font-weight: bold;
          font-style: normal;
          font-size: 20px;
          line-height: 23px;
      }
      
      h2 {
          height: 16px;
          /* margin-left: 7.73px; */
          margin-left: 16px;
          margin-top: 5px;
          margin-bottom: 0;
          
          color: #4C4C4C;
          font-family: Helvetica,serif;
          font-weight: bold;
          font-style: normal;
          font-size: 14px;
          line-height: 16px;
          
      }
  }
`;

// HOW TO USE IT:
//
//         <UserDetailContainer>
//             <img src={defaultRestaurantCardPicture} alt="profile picture" />
//             <div>
//                 <h1>
//                     Laurent H.
//                 </h1>
//                 <h2>
//                     6 Reviews in total
//                 </h2>
//             </div>
//         </UserDetailContainer>
