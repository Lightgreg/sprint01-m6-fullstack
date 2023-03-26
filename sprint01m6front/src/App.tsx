import React from 'react';
import { UserProvider } from './contexts/userContext';
import { RoutesCenter } from './routes';
import { Globalstyle } from './styles/global';

function App() {
  return (
    <>
      <Globalstyle />
      <UserProvider>
        <RoutesCenter/>
      </UserProvider>
    </>
  );
}

export default App;
