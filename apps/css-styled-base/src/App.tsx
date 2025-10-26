import { useState } from "react";
import { Item } from "react-stately";
import { Button, Input, Select, FontConfig } from "ui-components-styled";
import "./theme.css";
import "./reset.css";
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
    <div className="app">
      <div className="skin-switcher">
        <h3>CSS Styled Architecture - Base Theme</h3>
        <a href="http://localhost:5174" className="theme-link">
          Switch to Red Theme →
        </a>
      </div>

      <div className="demo-section">
        <h2>Basic Components</h2>

        <div className="demo-group">
          <h3>Button</h3>
          <Button onPress={() => alert("Clicked!")}>Click Me</Button>
          <Button isDisabled>Disabled</Button>
        </div>

        <div className="demo-group">
          <h3>Input</h3>
          <Input
            label="Name"
            value={demoInputValue}
            onChange={setDemoInputValue}
            placeholder="Enter name"
          />
        </div>

        <div className="demo-group">
          <h3>Select</h3>
          <Select label="Choose option" placeholder="Select...">
            <Item key="option1">Option 1</Item>
            <Item key="option2">Option 2</Item>
            <Item key="option3">Option 3</Item>
          </Select>
        </div>
      </div>

      <div className="demo-section">
        <h2>Complex Component - Text Input with Font Configuration</h2>
        <FontConfig
          textValue={textValue}
          onTextChange={setTextValue}
          fontConfig={fontConfig}
          onFontConfigChange={setFontConfig}
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
