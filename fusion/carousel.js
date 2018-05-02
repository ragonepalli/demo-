import React from 'react';
import { ThemeProvider } from 'theming';
import Card from '../fusion/Card';

const theme = {
  color: 'black',
  panelBackground: '00000008',
  panelShadow: '0px 0px 4px -1px',
  panelBorder: '0',
  panelRadius: '2px',
};
const data = [
  { key: 1, title: 'title', rating: '2' },
  { key: 1, title: 'title', rating: '2' },
];
const App = () => (
  <ThemeProvider theme={theme}>
    <Card cardData={data} />
  </ThemeProvider>
);

export default App;
