Sistema de Gerenciamento de Clientes

Para rodar, rode o servidor backend (sistema-gerenciamento1) com o comando "node .\app.js" com o powershell ou terminal do VSCode na pasta raiz do repositório respectivo. 
Rode o servidor frontend (sistema-gerenciamento) com o comando "npm start" com o powershell ou terminal do VSCode na pasta raiz do repositório respectivo.
Importante, também, rodar o DDL no postgres para a criação do banco de dados, presente no repositório sistema-gerenciamento1 (./sql/dbGerenciamento.sql).

As ferramentas utilizadas (já disponíveis nos repositórios) foram:
Backend-
"cors": "^2.8.5",
"express": "^4.18.2",
"nodemon": "^3.0.3",
"pg": "^8.11.3"

Frontend - 
"@emotion/react": "^11.11.3",
"@emotion/styled": "^11.11.0",
"@mui/styled-engine": "^5.15.6",
"@mui/x-data-grid": "^6.19.2",
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"axios": "^1.6.7",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.21.3",
"react-scripts": "^5.0.1",
"styled-components": "^6.1.8",
"web-vitals": "^2.1.4"
