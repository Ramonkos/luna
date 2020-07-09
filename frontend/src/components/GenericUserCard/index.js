import React from 'react';
import {defaultUserProfileAvatar} from '../../constants';
import {
    ReviewMainContainer,
    TopBar,
    AboutUserContainer, Line,
} from "./style";
import {UserDetailContainer} from "../../style/GlobalShortUserProfile";
import {Link} from "react-router-dom";

// Component

export const GenericUserCard = ({item}) => (
    <ReviewMainContainer>
        <TopBar/>
        <UserDetailContainer>
            <img src={item.avatar} alt="profile"/>
            <div>
                <Link to={`/users/${item.id}/`}>
                    <h1>{`${item.first_name} ${item.last_name}`}</h1>
                </Link>
                <h2>
                    {item.amount_of_reviews} Reviews in total
                </h2>
            </div>
        </UserDetailContainer>

        <Line/>

        <AboutUserContainer>

            {item.description.length > 146 ? (
                <>
                    <>
                        {item.description.slice(0, 147)}
                    </>
                    <>
                        ...
                    </>
                    <Link to={`/users/${item.id}/`}> read more</Link>
                </>) :
                <p>{item.description}</p>}
        </AboutUserContainer>
    </ReviewMainContainer>
);