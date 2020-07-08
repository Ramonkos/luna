import React from 'react';
import {GenericRestaurantCard} from '../GenericRestaurantCard';
import Masonry from "react-masonry-css";
import styled from "styled-components";
import GenericSpinner from "../GenericSpinner";
import './index.css';

const Center = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const GenericRestaurantList = ({restaurants}) => {
    const breakpointColumnsObj = {
        default: 4,
        1200: 2,
        // 1150: 1
    };

    return (
        <Center>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {restaurants
                    ? [...restaurants.map((restaurant, i) => <GenericRestaurantCard restaurant={restaurant}
                                                                                    key={'restaurant' + restaurant.id}/>)]
                    : <GenericSpinner/>
                }
            </Masonry>
        </Center>

    )
}
export default GenericRestaurantList;