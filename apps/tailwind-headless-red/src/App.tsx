import { useState } from "react";
import { Item } from "react-stately";
import { FontConfig } from "ui-components-headless";
import * as Skin from "./skin";

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
      <div className="max-w-[1200px] mx-auto py-xl px-5">
        <div className="flex gap-xs items-center justify-between mb-xl p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
          <h3 className="m-0 text-xl font-bold text-primary">
            Tailwind Headless Architecture - Red Theme
          </h3>
          <a
            href="http://localhost:5173"
            className="text-primary no-underline font-semibold transition-colors duration-DEFAULT hover:text-primary-hover hover:underline"
          >
            Switch to Base Theme →
          </a>
        </div>

        <div className="mb-xl p-6 border-2 border-border rounded-lg shadow-sm">
          <h2 className="mt-0 mb-6 text-2xl font-bold text-text">
            Basic Components
          </h2>

          <div className="mb-6">
            <h3 className="mb-4 text-text-secondary text-sm uppercase tracking-widest font-semibold">
              Button
            </h3>
            <div className="flex gap-4">
              <Skin.Button onPress={() => alert("Clicked!")}>
                Click Me
              </Skin.Button>
              <Skin.Button isDisabled>Disabled</Skin.Button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-4 text-text-secondary text-sm uppercase tracking-widest font-semibold">
              Input
            </h3>
            <Skin.Input
              label="Name"
              value={demoInputValue}
              onChange={setDemoInputValue}
              placeholder="Enter name"
            />
          </div>

          <div className="mb-6">
            <h3 className="mb-4 text-text-secondary text-sm uppercase tracking-widest font-semibold">
              Select
            </h3>
            <Skin.Select label="Choose option" placeholder="Select...">
              <Item key="option1">Option 1</Item>
              <Item key="option2">Option 2</Item>
              <Item key="option3">Option 3</Item>
            </Skin.Select>
          </div>
        </div>

        <div className="p-6 border-2 border-border rounded-lg shadow-sm">
          <h2 className="mt-0 mb-6 text-2xl font-bold text-text">
            Complex Component - Text Input with Font Configuration
          </h2>
          <FontConfig
            textValue={textValue}
            onTextChange={setTextValue}
            fontConfig={fontConfig}
            onFontConfigChange={setFontConfig}
            Input={Skin.Input}
            Select={Skin.Select}
            className="flex flex-col gap-md max-w-[800px]"
            gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-xs"
          />

          <div className="mt-6 p-5 bg-bg-hover rounded-lg border border-border">
            <h3 className="mt-0 mb-4 text-lg font-bold text-primary">
              Current Config:
            </h3>
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
