import { rem } from "polished";
import styled from 'styled-components'

export const UserAccessTitle = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: ${rem('24px')};
    line-height: ${rem('28px')};
    text-transform: uppercase;
    color: #4C4C4C;
`

export const BlackBold20Left = styled.div`
    font-weight: bold;
    font-size: ${rem('20px')};
    color: #000000;
    text-align: left;
    margin-bottom: ${rem('7px')};
`

export const GreyBold20LeftUppercase = styled(BlackBold20Left)`
    text-transform: uppercase;
    color: #303030;
    margin-bottom: ${rem('27px')};
`

export const BlackLight20Left = styled(BlackBold20Left)`
    font-weight: lighter;
    margin-bottom: ${rem('25px')};
`

export const LightgreyNormal20Left = styled(BlackBold20Left)`
    font-weight: normal;
    color: #4C4C4C;
`

export const GreyLight16Justified = styled.div`
    font-weight: lighter;
    font-size: ${rem('16px')};
    color: #303030;
    text-align: justify;
`
