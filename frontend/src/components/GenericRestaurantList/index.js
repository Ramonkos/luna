import React from 'react';
import {GenericRestaurantCard} from '../GenericRestaurantCard';
import Masonry from "react-masonry-css";
import styled from "styled-components";
import GenericSpinner from "../GenericSpinner";
import './index.css';

const Center = styled.div`
  width: 100%;
  align-items: center;
`;

const GenericRestaurantList = ({items}) => {
    const breakpointColumnsObj = {
        default: 4,
        1200: 3,
        900: 2,
        600: 1,
    };

    return (
        <Center>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {items
                    ? [...items.map((item, i) => <GenericRestaurantCard item={item} key={'item' + item.id}/>)]
                    : <GenericSpinner/>
                }
            </Masonry>
        </Center>

    )
}
export default GenericRestaurantList;