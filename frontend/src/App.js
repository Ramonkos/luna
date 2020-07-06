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
import { Input, RestaurantCreationInput, SearchBarInput } from "./style/GlobalInput";
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
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
