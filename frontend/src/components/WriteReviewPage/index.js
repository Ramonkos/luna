import React from "react";
import {
  ErrorButtonContainer,
  RatingContainer,
  RestaurantContainer,
  SelectRatingContainer,
  Stars,
  StarsReviewContainer,
  ButtonContainer,
} from "./style";
import { Button } from "../../style/GlobalButton";
import StarRatingComponent from "react-star-rating-component";

export const WriteReviewPage = () => (
  <div>
    <RestaurantContainer>
      <restaurantname>Läderach Chocolatier Suisse</restaurantname>
      <restaurantdescription>Chocolatiers & Shops</restaurantdescription>
      <StarsReviewContainer>
        <Stars />
        <p>24 reviews</p>
      </StarsReviewContainer>
    </RestaurantContainer>

    <RatingContainer>
      <SelectRatingContainer>
        <largestars>Placeholder Stars</largestars>
        <p>Select your rating</p>
      </SelectRatingContainer>

      <textarea
        id="review"
        name="review"
        placeholder=" Your review helps others learn about great businesses.
               .
               Please do not review this business if you received a freebie for writing this review,
               or if you are connected in any way to the owner or employees."
      />

      <ErrorButtonContainer>
        <errormessage>Placeholder ErrorMessage</errormessage>
        <ButtonContainer>
          <Button>Submit</Button>
        </ButtonContainer>
      </ErrorButtonContainer>
    </RatingContainer>
  </div>
);

// class WriteReviewPage extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       rating: 1,
//     };
//   }

//   onStarClick(nextValue, prevValue, name) {
//     this.setState({ rating: nextValue });
//   }

//   render() {
//     const { rating } = this.state;

//     return (
//         <div>

//         <RestaurantContainer>
//           <restaurantname>Läderach Chocolatier Suisse</restaurantname>
//           <restaurantdescription>Chocolatiers & Shops</restaurantdescription>
//           <StarsReviewContainer>
//             <StarRatingComponent
//               name="Restaurant_Rating"
//               starColor={"#F8E71C"}
//               emptyStarColor={"rgba(235, 235, 235, 0.5)"}
//               starCount={5}
//               value={4}
//               //   value={Math.round(item.review_average)}
//             />
//             <p>24 reviews</p>
//           </StarsReviewContainer>
//         </RestaurantContainer>

//         <RatingContainer>
//           <SelectRatingContainer>
//             <StarRatingComponent
//               name="rate1"
//               starCount={10}
//               value={rating}
//               //   onStarClick={this.onStarClick.bind(this)}
//             />
//             <p>Select your rating</p>
//           </SelectRatingContainer>

//           <textarea
//             id="review"
//             name="review"
//             placeholder=" Your review helps others learn about great businesses.
//                        .
//                        Please do not review this business if you received a freebie for writing this review,
//                        or if you are connected in any way to the owner or employees."
//           />

//           <ErrorButtonContainer>
//             <errormessage>Placeholder ErrorMessage</errormessage>
//             <ButtonContainer>
//               <Button>Submit</Button>
//             </ButtonContainer>
//           </ErrorButtonContainer>
//         </RatingContainer>
//       </div>
//     );
//   }
// }

// export default WriteReviewPage;

//TODO try to enter empty row in textarea
//TODO add error message if input field is empty
