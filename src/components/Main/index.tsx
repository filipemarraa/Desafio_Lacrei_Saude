import { ContainerContent, ContainerImg, Wrapper, Title, Subtitle, ContainerButton, Button, CustomButton, Line, Img } from "./styles";
import img from '../../assets/img.svg';
import React from 'react';

export default function Main() {
  return (
    <Wrapper data-testid="main">
      <ContainerContent>
        <Title>Junte-se à nossa comunidade</Title>
        <Line />
        <Subtitle>Encontre atendimento clínico de qualidade ou entre para o time de profissionais da Lacrei Saúde.</Subtitle>
        <ContainerButton>
          <Button>Buscar atendimento</Button>
          <CustomButton>Oferecer atendimento</CustomButton>
        </ContainerButton>
      </ContainerContent>
      <ContainerImg>
        <Img src={img} alt="Imagem de atendimento ao paciente" />
      </ContainerImg>
    </Wrapper>
  );
}
