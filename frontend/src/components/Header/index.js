import React from "react";
import { Link } from 'react-router-dom'

import { HeaderContainer } from "./style.js";
import { LinkButtonWrapper } from "./style.js";
import { SmallOrangeLeftButton } from "../../../src/style/GlobalButton"
import { SmallOrangeRightButton } from "../../../src/style/GlobalButton"

//TODO: change a to link
const Header = () => {
  return (
    <HeaderContainer>
      <h1>Luna</h1>
      <LinkButtonWrapper>
        {/* <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/profile">Profile</Link> */}
        {/* <Link to="#">Home</Link>
        <Link to="#">Search</Link>
        <Link to="#">Profile</Link> */}
        <ul>
          <li>
          <a>Home</a>
          </li>
        </ul>
        <ul>
          <li>
          <a>Search</a>
          </li>
        </ul>
        <ul>
          <li>
          <a>Profile</a>
          </li>
        </ul>
        <SmallOrangeLeftButton>SignUp</SmallOrangeLeftButton>
          <SmallOrangeRightButton>Login</SmallOrangeRightButton>
      </LinkButtonWrapper>          
    </HeaderContainer>
  )
}

export default Header;