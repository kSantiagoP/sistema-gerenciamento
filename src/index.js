import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './routes/HomePage';
import reportWebVitals from './reportWebVitals';
import Busca from './routes/BuscaPage';
import Cadastro from './routes/CadastroPage';
import Rota from './routes/RotaPage';


const GlobalSt = createGlobalStyle`
  li{
    list-style: none;
  };

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  };

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  };
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalSt></GlobalSt>
    <BrowserRouter>
      <Header></Header>
      <Routes>  
          <Route path='/' element={<Home />}></Route>
          <Route path='/busca' element={<Busca/>}></Route>
          <Route path='/cadastro' element={<Cadastro/>}></Route>
          <Route path='/rota' element={<Rota/>}></Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
