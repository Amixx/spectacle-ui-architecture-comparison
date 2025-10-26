import { useState } from "react";
import { Item } from "react-stately";
import { Button, Input, Select, FontConfig } from "ui-components-vanilla-extract-styled";
import "./theme.css";
import * as styles from "./App.css";

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
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.skinSwitcher}>
          <h3 className={styles.skinSwitcherTitle}>
            Vanilla Extract Styled Architecture - Red Theme
          </h3>
          <a href="http://localhost:5173" className={styles.themeLink}>
            Switch to Base Theme →
          </a>
        </div>

        <div className={styles.demoSection}>
          <h2 className={styles.sectionTitle}>Basic Components</h2>

          <div className={styles.demoGroup}>
            <h3 className={styles.groupTitle}>Button</h3>
            <div className={styles.buttonGroup}>
              <Button onPress={() => alert("Clicked!")}>Click Me</Button>
              <Button isDisabled>Disabled</Button>
            </div>
          </div>

          <div className={styles.demoGroup}>
            <h3 className={styles.groupTitle}>Input</h3>
            <Input
              label="Name"
              value={demoInputValue}
              onChange={setDemoInputValue}
              placeholder="Enter name"
            />
          </div>

          <div className={styles.demoGroup}>
            <h3 className={styles.groupTitle}>Select</h3>
            <Select label="Choose option" placeholder="Select...">
              <Item key="option1">Option 1</Item>
              <Item key="option2">Option 2</Item>
              <Item key="option3">Option 3</Item>
            </Select>
          </div>
        </div>

        <div className={styles.demoSection}>
          <h2 className={styles.sectionTitle}>
            Complex Component - Text Input with Font Configuration
          </h2>
          <FontConfig
            textValue={textValue}
            onTextChange={setTextValue}
            fontConfig={fontConfig}
            onFontConfigChange={setFontConfig}
          />

          <div className={styles.configOutput}>
            <h3 className={styles.configOutputTitle}>Current Config:</h3>
            <pre className={styles.configPre}>
              {JSON.stringify({ text: textValue, font: fontConfig }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
