import React from 'react';
import Masonry from "react-masonry-css";
import styled from "styled-components";
import GenericSpinner from "../GenericSpinner";
import './index.css';
import {GenericReviewCard} from "../GenericReviewCard";

const Center = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const GenericReviewList = ({items}) => {
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
                {items
                    ? [...items.map((item, i) => <GenericReviewCard item={item} key={'item' + item.id}/>)]
                    : <GenericSpinner/>
                }
            </Masonry>
        </Center>

    )
};
export default GenericReviewList;