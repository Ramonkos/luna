import React from 'react';
import {defaultUserProfileAvatar} from '../../constants';
import {
    ReviewMainContainer,
    TopBar,
    AboutUserContainer,
} from "./style";

import {UserDetailContainer} from "../../style/GlobalShortUserProfile";


export const GenericUserCard = () => (
    <ReviewMainContainer>
        <TopBar />
        <UserDetailContainer>
            <img src={defaultUserProfileAvatar} alt="profile picture" />
            <namereviewsContainer>
                <name>
                    Laurent H.
                </name>
                <reviews>
                    6 Reviews in total
                </reviews>
            </namereviewsContainer>
        </UserDetailContainer>

        <AboutUserContainer>
            Ugh. Don't waste your time. Pizza dough good, thin crust but ingredients so so.
            Side of mixed vegetables very oily and mainly bell...
            <a href="">read more</a>
        </AboutUserContainer>
    </ReviewMainContainer>
);