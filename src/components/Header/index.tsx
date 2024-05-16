import React, { useState } from 'react';
import { Wrapper, Logo, Nav, HamburguerMenu, NavMenuMobile, NavMenuContent, ButtonBase, NavButton } from './styles';
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <Wrapper data-testid="header">
      <Logo data-testid="logo" />
      <HamburguerMenu data-testid="hamburguerMenu">
        {isOpenMenu ? (
          <IoClose 
            size={40}
            onClick={toggleMenu} 
            style={{ zIndex: 999, color: '#018762' }}
          />
        ) : (
          <MdMenu
            size={40}
            onClick={toggleMenu}
            style={{ zIndex: 999, color: '#018762' }} 
          />
        )}
      </HamburguerMenu>
      {isOpenMenu && (
        <NavMenuMobile>
          <NavMenuContent>
            <NavButton href='/'>Quem somos</NavButton>
            <NavButton href='/'>Ajuda</NavButton>
            <ButtonBase>Entrar</ButtonBase>
          </NavMenuContent>
        </NavMenuMobile>
      )}
      <Nav data-testid="nav">
        <NavButton href='/'>Quem somos</NavButton>
        <NavButton href='/'>Ajuda</NavButton>
        <ButtonBase>Entrar</ButtonBase>
      </Nav>
    </Wrapper>
  );
}
