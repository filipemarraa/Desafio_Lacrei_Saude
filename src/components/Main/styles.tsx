import styled from 'styled-components';
import { colors, breakpoints } from '../../styles/Variables';

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 24px 68px 24px;
  margin-left: 138px;
  margin-right: 138px;

  @media screen and (max-width: ${breakpoints.large}) {
    flex-direction: column;
    gap: 48px;
    margin-left: 24px; /* Ajuste para dispositivos menores */
    margin-right: 24px; /* Ajuste para dispositivos menores */
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px; /* Corrigido */
  max-width: 766px;

  @media screen and (max-width: ${breakpoints.large}) {
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 57px;
`;

export const Line = styled.span`
  width: 35%;
  height: 2px;
  margin-top: 8px;
  background-color: ${colors.primary};
`;

export const Subtitle = styled.h2`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: ${colors.black};
`;

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 24px;

  @media screen and (max-width: ${breakpoints.small}) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  outline: 2px solid ${colors.primary}; 
  padding: 10px 32px;
  border-radius: 8px;

  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  
  transition: linear .3s;
  box-shadow: 0px 5px 10px 0px #0000004D;

  &:hover {
    background-color: ${colors.primaryLight};
    outline: 2px solid ${colors.primaryLight}; 
  }
`;

export const CustomButton = styled(Button)`
  background-color: ${colors.white}; 
  outline: 2px solid ${colors.primary}; 
  color: ${colors.primary};

  &:hover {
    color: ${colors.white};
    background-color: ${colors.primary};
    outline: 2px solid ${colors.primary}; 
  }
`;

export const ContainerImg = styled.div`
  height: 100%;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
