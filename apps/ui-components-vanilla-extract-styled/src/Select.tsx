import { useRef, useState } from "react";
import { useButton, useSelect } from "react-aria";
import { useSelectState, Item as AriaItem } from "react-stately";
import type { AriaSelectProps } from "@react-types/select";
import * as styles from "./Select.css";

export { Item } from "react-stately";

export function Select<T extends object>(
  props: AriaSelectProps<T> & { label?: string; placeholder?: string }
) {
  const state = useSelectState(props);
  const ref = useRef<HTMLButtonElement>(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  );
  const { buttonProps } = useButton(triggerProps, ref);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      state.open();
    } else {
      state.close();
    }
  };

  return (
    <div className={styles.container}>
      {props.label && (
        <label {...labelProps} className={styles.label}>
          {props.label}
        </label>
      )}
      <button
        {...buttonProps}
        ref={ref}
        onClick={handleToggle}
        className={styles.button}
      >
        <span {...valueProps}>
          {state.selectedItem
            ? (state.selectedItem as AriaItem<T>).rendered
            : props.placeholder || "Select..."}
        </span>
        <span aria-hidden="true">▼</span>
      </button>
      {isOpen && (
        <ul {...menuProps} className={styles.listBox}>
          {Array.from(state.collection).map((item) => (
            <li
              key={item.key}
              onClick={() => {
                state.setSelectedKey(item.key);
                setIsOpen(false);
                state.close();
              }}
              className={styles.option}
            >
              {item.rendered}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
