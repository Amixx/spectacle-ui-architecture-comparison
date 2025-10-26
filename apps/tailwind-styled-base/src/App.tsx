import { useState } from "react";
import { Item } from "react-stately";
import {
  Button,
  Input,
  Select,
  FontConfig,
} from "ui-components-tailwind-styled";

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
    <div className="min-h-screen bg-bg font-sans text-text">
      <div className="max-w-[1200px] mx-auto py-10 px-5">
        <div className="flex gap-3 items-center justify-between mb-10 p-5 bg-bg-hover rounded">
          <h3 className="m-0 text-lg font-semibold">
            Tailwind Styled Architecture - Base Theme
          </h3>
          <a
            href="http://localhost:5174"
            className="text-primary no-underline font-medium transition-colors duration-DEFAULT hover:text-primary-hover hover:underline"
          >
            Switch to Red Theme →
          </a>
        </div>

        <div className="mb-10 p-6 border border-border rounded">
          <h2 className="mt-0 mb-6 text-2xl font-bold text-text">
            Basic Components
          </h2>

          <div className="mb-6">
            <h3 className="mb-3 text-text-secondary text-sm uppercase tracking-wider font-medium">
              Button
            </h3>
            <div className="flex gap-3">
              <Button onPress={() => alert("Clicked!")}>Click Me</Button>
              <Button isDisabled>Disabled</Button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-text-secondary text-sm uppercase tracking-wider font-medium">
              Input
            </h3>
            <Input
              label="Name"
              value={demoInputValue}
              onChange={setDemoInputValue}
              placeholder="Enter name"
            />
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-text-secondary text-sm uppercase tracking-wider font-medium">
              Select
            </h3>
            <Select label="Choose option" placeholder="Select...">
              <Item key="option1">Option 1</Item>
              <Item key="option2">Option 2</Item>
              <Item key="option3">Option 3</Item>
            </Select>
          </div>
        </div>

        <div className="p-6 border border-border rounded">
          <h2 className="mt-0 mb-6 text-2xl font-bold text-text">
            Complex Component - Text Input with Font Configuration
          </h2>
          <FontConfig
            textValue={textValue}
            onTextChange={setTextValue}
            fontConfig={fontConfig}
            onFontConfigChange={setFontConfig}
          />

          <div className="mt-6 p-4 bg-bg-hover rounded">
            <h3 className="mt-0 mb-3 text-lg font-semibold">Current Config:</h3>
            <pre className="m-0 font-mono text-[13px]">
              {JSON.stringify({ text: textValue, font: fontConfig }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
