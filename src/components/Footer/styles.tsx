import styled from 'styled-components';
import { colors, breakpoints } from '../../styles/Variables';

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 0 24px;

`;

export const Divider = styled.span`
   width: 100%;
   height: 1px;
   border-radius: 1px;
   background-color: ${colors.primaryLighten};
`;

export const SFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 48px 0;   
    gap: 32px; 

    @media screen and (max-width: ${breakpoints.medium}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;

    @media screen and (max-width: ${breakpoints.medium}) {
        img {
            max-width: 100%;
        }
    }

    @media screen and (max-width: ${breakpoints.small}) {
        align-items: center;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    gap: 16px;
`;

export const FooterLinks = styled.div`
    display: flex; 
    justify-content: space-between;
    gap: 150px; 

    @media screen and (max-width: ${breakpoints.small}) {
        flex-direction: column;
        align-items: start;
        text-align: start;
        gap: 32px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: ${breakpoints.small}) {
        align-items: start;
    }
`;

export const TitleLinks = styled.h4`
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    margin-bottom: 24px;
`;

export const Link = styled.a`
  position: relative;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.black}; 
  text-decoration: none;
  margin-bottom: 16px;
  overflow: hidden;
  transition: all 0.4s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

export const BFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 48px 0;

    @media screen and (max-width: ${breakpoints.small}) {
        align-items: end;
    }
`;

export const Copyright = styled.div`
    margin-top: 15px;
`

export const TextFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const BtnFooter = styled.button`
    padding: 10px 12px;
    width: 48px;
    height: 48px;

    display: flex; 
    justify-content: center; 
    align-items: center; 

    border-radius: 8px;
    border: 2px solid ${colors.primary};
    background-color: ${colors.white};
    box-shadow: 0px 5px 10px 0px #0000004D;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.7;
    }
`;