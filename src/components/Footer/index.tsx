import { Wrapper, Divider, SFooter, SocialWrapper, IconWrapper, FooterLinks, Column, TitleLinks, Link, BtnFooter, BFooter, TextFooter, Copyright} from "./styles";
import React from 'react';
import img from '../../assets/logo-footer.svg';
import btn from '../../assets/btnFooter.svg';
import { icons } from "../../utils/icons";
import { infoFooter } from "../../utils/infoFooter";

export default function Footer() {
  const scrollTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

    return (
      <>
        <Wrapper data-testid="footer">
          <Divider />
          <SFooter>
            <SocialWrapper>
              <img src={img} alt="Logo Lacrei"/>
              <IconWrapper>
                {icons.map((item) => (
                  <a key={item.name} href="/" id='contact-icon-footer'>
                    <img
                      src={item.icon}
                      alt={item.alt}
                    />
                  </a>
                ))}
              </IconWrapper>
            </SocialWrapper>
            <FooterLinks>
              <Column>
                <TitleLinks>Lacrei Saúde</TitleLinks>
                {infoFooter.column1.map((item) => (
                  <Link key={item} href='/'>{item}</Link>
                ))}
              </Column>
              <Column>
                <TitleLinks>Saúde</TitleLinks>
                {infoFooter.column2.map((item) => (
                  <Link key={item} href='/'>{item}</Link>
                ))}
              </Column>
              <Column>
                <TitleLinks>Segurança e Privacidade</TitleLinks>
                {infoFooter.column3.map((item) => (
                  <Link key={item} href='/'>{item}</Link>
                ))}
              </Column>
            </FooterLinks>
          </SFooter>
          <Divider />
          <BFooter>
            <TextFooter>
              <p>A Lacrei não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.</p>
              <p>Em caso de problemas psicológicos, ligue para 188 (CVV) ou acesse o site <Link href="www.cvv.org.br">www.cvv.org.br</Link></p>
              <Copyright>
                <p>Copyright © 2021 Lacrei. Todos os direitos reservados. CNPJ: 51.265.351/0001-65</p>
              </Copyright>
            </TextFooter>
            <BtnFooter 
              type="button"
              onClick={scrollTop}>
              <img 
              src={btn} 
              alt="Botão para retornar ao topo"/>
            </BtnFooter>       
          </BFooter>
        </Wrapper>
      </>
    )
}