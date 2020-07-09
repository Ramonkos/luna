import React from 'react';
import {defaultUserProfileAvatar} from '../../constants';
import {
    ReviewMainContainer,
    TopBar,
    AboutUserContainer,
} from "./style";

import {UserDetailContainer} from "../../style/GlobalShortUserProfile";
import {Link} from "react-router-dom";


export const GenericUserCard = ({item}) => (
    <ReviewMainContainer>
        <TopBar/>
        <UserDetailContainer>
            <img src={defaultUserProfileAvatar} alt="profile picture"/>
            <namereviewsContainer>
                <name>
                    {`${item.first_name} ${item.last_name}`}
                </name>
                <reviews>
                    {item.amount_of_reviews} Reviews in total
                </reviews>
            </namereviewsContainer>
        </UserDetailContainer>

        <AboutUserContainer>
            {item.description.length > 146 ? (
                    <Link to={`/users/${item.id}/`}>{`${item.description.slice(0, 147)}... read more`}</Link>) :
                <p>{item.description}</p>}
        </AboutUserContainer>
    </ReviewMainContainer>
);