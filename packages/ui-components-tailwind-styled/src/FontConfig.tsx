import { Item } from "react-stately";
import type { Key } from "@react-types/shared";
import { Input } from "./Input";
import { Select } from "./Select";

export function FontConfig({
  textValue,
  onTextChange,
  fontConfig,
  onFontConfigChange,
}: {
  textValue: string;
  onTextChange: (value: string) => void;
  fontConfig: {
    family: string;
    weight: string;
    size: string;
    spacing: string;
  };
  onFontConfigChange: (config: {
    family: string;
    weight: string;
    size: string;
    spacing: string;
  }) => void;
}) {
  const handleConfigChange = (
    field: "family" | "weight" | "size" | "spacing",
    value: Key | null
  ) => {
    if (value !== null) {
      onFontConfigChange({ ...fontConfig, [field]: String(value) });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Text Input"
        value={textValue}
        onChange={onTextChange}
        placeholder="Enter text here..."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Select
          label="Font Family"
          selectedKey={fontConfig.family}
          onSelectionChange={(key) => handleConfigChange("family", key)}
          placeholder="Select family"
        >
          <Item key="graduate" textValue="GRADUATE">
            <span style={{ fontFamily: "Graduate" }}>GRADUATE</span>
          </Item>
          <Item key="roboto" textValue="Roboto">
            <span style={{ fontFamily: "Roboto" }}>Roboto</span>
          </Item>
          <Item key="inter" textValue="Inter">
            <span style={{ fontFamily: "Inter" }}>Inter</span>
          </Item>
          <Item key="courier" textValue="Courier">
            <span style={{ fontFamily: '"Courier Prime"' }}>Courier</span>
          </Item>
        </Select>

        <Select
          label="Weight"
          selectedKey={fontConfig.weight}
          onSelectionChange={(key) => handleConfigChange("weight", key)}
          placeholder="Regular"
        >
          <Item key="regular">Regular</Item>
          <Item key="medium">Medium</Item>
          <Item key="semibold">Semibold</Item>
          <Item key="bold">Bold</Item>
        </Select>

        <Select
          label="Font Size"
          selectedKey={fontConfig.size}
          onSelectionChange={(key) => handleConfigChange("size", key)}
          placeholder="16"
        >
          <Item key="12">12px</Item>
          <Item key="14">14px</Item>
          <Item key="16">16px</Item>
          <Item key="18">18px</Item>
          <Item key="20">20px</Item>
          <Item key="24">24px</Item>
        </Select>

        <Select
          label="Letter Spacing"
          selectedKey={fontConfig.spacing}
          onSelectionChange={(key) => handleConfigChange("spacing", key)}
          placeholder="0"
        >
          <Item key="0">0px</Item>
          <Item key="0.5">0.5px</Item>
          <Item key="1">1px</Item>
          <Item key="2">2px</Item>
        </Select>
      </div>
    </div>
  );
}
