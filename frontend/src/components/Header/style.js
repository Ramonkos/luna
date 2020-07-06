import styled from "styled-components";
// TODO: import rem stuff
import { rem } from "polished";

//TODO: choose H1 font
export const HeaderContainer = styled.div`
  border: solid 1px white;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    padding-left: 30px;
    font-family: 'Merienda One', cursive, Arial, serif;;
    font-size: 36px;
  }
`;


//TODO: active Links
export const LinkButtonWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  a {
    padding-right: 70px;
    font-family: Helvetica, Arial, serif;
    font-size: ${rem('20px')};
    line-height: 23px;
  }
`;

