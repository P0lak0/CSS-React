import React from 'react';
import './App.css';
import { FileButton1 } from './file-button/file-button-1.js';
import { FileButton2 } from './file-button/file-button-2.js';
import { JsButton1 } from './js-button/js-button-1.js';
import { JsButton2 } from './js-button/js-button-2.js';
import { Button, PrimaryButton, SecondaryButton } from './buttons/button.js';

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="App">
      <header className="App-header">


      <FileButton1/>
      <FileButton2/>

      <JsButton1/>
      <JsButton2/>

      <Button>Abstract Button</Button>
      <PrimaryButton
        onClick={() => setActive(!active)}
        $active={active}
      >Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      </header>
    </div>
  );
}

export default App;
