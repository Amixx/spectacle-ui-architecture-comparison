import { useState } from "react";
import { Item } from "react-stately";
import { FontConfig } from "ui-components";
import * as Skin from "./skin";
import "./reset.css";
import "./themes.css";
import "./App.css";

function App() {
  const [demoInputValue, setDemoInputValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [fontConfig, setFontConfig] = useState({
    family: "inter",
    weight: "regular",
    size: "16",
    spacing: "0",
  });

  return (
    <div className="app" data-theme="base">
      <div className="skin-switcher">
        <h3>CSS Headless Architecture - Base Theme</h3>
        <a href="http://localhost:5174" className="theme-link">
          Switch to Red Theme →
        </a>
      </div>

      <div className="demo-section">
        <h2>Basic Components</h2>

        <div className="demo-group">
          <h3>Button</h3>
          <Skin.Button onPress={() => alert("Clicked!")}>Click Me</Skin.Button>
          <Skin.Button isDisabled>Disabled</Skin.Button>
        </div>

        <div className="demo-group">
          <h3>Input</h3>
          <Skin.Input
            label="Name"
            value={demoInputValue}
            onChange={setDemoInputValue}
            placeholder="Enter name"
          />
        </div>

        <div className="demo-group">
          <h3>Select</h3>
          <Skin.Select label="Choose option" placeholder="Select...">
            <Item key="option1">Option 1</Item>
            <Item key="option2">Option 2</Item>
            <Item key="option3">Option 3</Item>
          </Skin.Select>
        </div>
      </div>

      <div className="demo-section">
        <h2>Complex Component - Text Input with Font Configuration</h2>
        <FontConfig
          textValue={textValue}
          onTextChange={setTextValue}
          fontConfig={fontConfig}
          onFontConfigChange={setFontConfig}
          Input={Skin.Input}
          Select={Skin.Select}
          className="font-config"
        />

        <div className="config-output">
          <h3>Current Config:</h3>
          <pre>
            {JSON.stringify({ text: textValue, font: fontConfig }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
