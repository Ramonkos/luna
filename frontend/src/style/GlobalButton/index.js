import { rem } from "polished";
import styled from 'styled-components'

export const Button = styled.button`
    height: ${rem('56px')};
    width: ${rem('200px')};
    border-radius: ${ rem('28px')};
    border: none;
    background-color: #E47D31;
    cursor: pointer;
    font-family: Helvetica, Arial,serif;
    font-size: ${rem('20px')};
    line-height: ${rem('23px')};
    color: #FFFFFF;
    &:focus {
      outline: none;
    } 
`

export const SmallOrangeLeftButton = styled(Button)`
    height: ${rem('40px')};
    width: ${rem('100px')};
    border-radius: ${ rem('20px')} 0 0 ${ rem('20px')};
    font-size: ${rem('16px')};
    line-height: ${rem('19px')};
    border-right: 1px solid white;
    text-transform: uppercase;
`

export const SmallOrangeRightButton = styled(Button)`
    height: ${rem('40px')};
    width: ${rem('100px')};
    border-radius: 0 ${ rem('20px')} ${ rem('20px')} 0;
    font-size: ${rem('16px')};
    line-height: ${rem('19px')};
    border-left: 1px solid white;
    text-transform: uppercase;
`

export const SmallOrangeButton = styled(Button)`
    height: ${rem('40px')};
    width: ${rem('120px')};
    font-size: ${rem('16px')};
    line-height: ${rem('18px')};
    text-transform: uppercase;
`

export const SmallestOrangeButton = styled(SmallOrangeButton)`
    height: ${rem('30px')};
`

export const GreyLeftButton = styled(SmallOrangeLeftButton)`
    height: ${rem('33px')};
    width: ${rem('125px')};
    background-color: rgba(145, 145, 145, 0.6);
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GreyRightButton = styled(SmallOrangeRightButton)`
    height: ${rem('33px')};
    width: ${rem('125px')};
    background-color: rgba(145, 145, 145, 0.6);
    text-transform: capitalize;
`

export const LikeIcon = styled.img`
    height: ${rem('21px')};
    width: ${rem('17px')};
    margin-right: ${rem('11px')};
`

export const GreyButtonPairWrapper = styled.div`
    display: flex;
    justify-content: center;
`