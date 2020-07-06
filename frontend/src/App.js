import React from 'react';
import likeIcon from './assets/like.png';
import './App.css';
import {
    Button,
    SmallOrangeLeftButton,
    SmallOrangeRightButton,
    SmallestOrangeButton,
    SmallOrangeButton,
    GreyLeftButton,
    GreyRightButton,
    LikeIcon,
    GreyButtonPairWrapper
} from "./style/GlobalButton";
import {Input, RestaurantCreationInput, SearchBarInput} from "./style/GlobalInput";
import {UserAccessTitle} from "./style/GlobalTitles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div><Button>Button text</Button></div>
          <div>
              <SmallOrangeLeftButton>Sign up</SmallOrangeLeftButton><SmallOrangeRightButton>Login</SmallOrangeRightButton>
          </div>
          <div><SmallOrangeButton>Filter</SmallOrangeButton></div>
          <div><SmallestOrangeButton>Post</SmallestOrangeButton></div>
          <GreyButtonPairWrapper>
              <GreyLeftButton><LikeIcon src={likeIcon}></LikeIcon>Like  63</GreyLeftButton><GreyRightButton>Comment  23</GreyRightButton>
          </GreyButtonPairWrapper>
          <Input placeholder="E-Mail" />
          <RestaurantCreationInput placeholder="Restaurant" />
          <SearchBarInput placeholder="Search..." />
          <UserAccessTitle>Registration</UserAccessTitle>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
  );
}

export default App;
