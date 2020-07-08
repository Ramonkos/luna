import { rem } from "polished";
import styled from 'styled-components'

export const UserAccessTitle = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: ${rem('24px')};
    line-height: ${rem('28px')};
    text-transform: uppercase;
    color: #4C4C4C;
`;

export const UserProfileTitle = styled.h3`
  text-transform: uppercase;
  color: #303030;
  font-size: ${rem("20px")};
  line-height: ${rem("23px")};
  margin-top: 11px;
`;