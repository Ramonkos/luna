import React from "react";
import { useHistory, Link, NavLink } from "react-router-dom";

import { SmallOrangeLeftButton } from "../../../src/style/GlobalButton";
import { SmallOrangeRightButton } from "../../../src/style/GlobalButton";
import styled from "styled-components";
import { rem } from "polished";

const HeaderContainer = styled.div`
  border: solid 1px white;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  h1 {
    padding-left: 30px;
    font-family: "Merienda One", cursive, Arial, serif;
    font-size: ${rem("36px")};
    color: #000;
  }
`;

const LinkButtonWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  a {
    font-size: ${rem("20px")};
    line-height: ${rem("23px")};
    color: #4a4a4a;
    padding-bottom: 20px;
  }
`;

const LinkWrapper = styled.div`
  height: 100%;
  margin-right: 70px;
  .active {
    border-bottom: 3px solid #e47d31;
  }
`;

const Header = () => {
  let history = useHistory();
  return (
    <>
      <HeaderContainer>
        <Link onClick={() => history.push("/")}>
          <h1>Luna</h1>
        </Link>
        <LinkButtonWrapper>
          <ul>
            <li>
              <LinkWrapper>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </LinkWrapper>
            </li>
            <li>
              <LinkWrapper>
                <NavLink to="/search/restaurants/">Search</NavLink>
              </LinkWrapper>
            </li>
            <li>
              <LinkWrapper>
                <NavLink to="/userprofile/">Profile</NavLink>
              </LinkWrapper>
            </li>
          </ul>
          <SmallOrangeLeftButton onClick={() => history.push("/auth/signup/")}>
            SignUp
          </SmallOrangeLeftButton>
          <SmallOrangeRightButton onClick={() => history.push("/auth/login/")}>
            Login
          </SmallOrangeRightButton>
        </LinkButtonWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
