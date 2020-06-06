import React, { useState } from 'react';
import {LoginFormC, LoginFormF} from './LoginForm';

function App() {

  const [visisble, setVisible] = useState(true);

  return (
    <div>
      {visisble ? <>
        <LoginFormC />
        <LoginFormF />
      </> : null}

      <button onClick={() => setVisible(! visisble)}>Toggle</button>
    </div>
  );
}

export default App;
