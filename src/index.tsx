import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Container, MantineProvider } from '@mantine/core';
import App from './App';

import '@mantine/core/styles.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider >
      <Container style={{ margin: "auto", padding: "20px", maxWidth: "600px" }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Container>
    </MantineProvider>
  </React.StrictMode>
);
