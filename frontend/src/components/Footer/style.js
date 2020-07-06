import styled from "styled-components";
import { rem } from "polished";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const UpperWrapper = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  ul li {
    list-style: none;
    display: inline-block;
  }
  a {
    text-decoration: none;
    padding-left: 30px;
  }
`;

export const FooterLinks = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-start;
  a {
    font-size: ${rem('20px')};
    line-height: 23px;
    color: #646363;
  }
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 65%;
  img {
    padding-right: 30px;
  }
`;

export const LowerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  font-size: rem("12px");
  padding-left: 30px;
  p {
    font-size: ${rem('12px')};
    line-height: ${rem('14px')};
    color: #646363;
  }
`;
