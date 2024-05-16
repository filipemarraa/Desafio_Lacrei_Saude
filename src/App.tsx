import React from 'react';

import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


const App: React.FC = () => {

  return (
    <>
      <GlobalStyle />

      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App;