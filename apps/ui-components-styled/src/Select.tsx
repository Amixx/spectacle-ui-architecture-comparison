import { useSelect, HiddenSelect, type AriaSelectProps } from "react-aria";
import { useSelectState } from "react-stately";
import { useRef } from "react";
import styles from "./Select.module.css";

export function Select<T extends object>(
  props: AriaSelectProps<T> & {
    placeholder?: string;
  }
) {
  const state = useSelectState(props);
  const ref = useRef<HTMLButtonElement>(null);
  const { labelProps, triggerProps, valueProps } = useSelect(props, state, ref);

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onPressStart: _,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onPressEnd: _1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onPressChange: _2,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onPressUp: _3,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onPress: _4,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    preventFocusOnPress: _5,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isDisabled: _6,
    ...domTriggerProps
  } = triggerProps as typeof triggerProps & {
    onPressStart?: unknown;
    onPressEnd?: unknown;
    onPressChange?: unknown;
    onPressUp?: unknown;
    onPress?: unknown;
    preventFocusOnPress?: unknown;
    isDisabled?: unknown;
  };

  return (
    <div className={styles.container}>
      {props.label && (
        <label {...labelProps} className={styles.label}>
          {props.label}
        </label>
      )}
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <button
        {...domTriggerProps}
        ref={ref}
        className={styles.button}
        disabled={props.isDisabled}
        onClick={() => (state.isOpen ? state.close() : state.open())}
      >
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : props.placeholder || "Select..."}
        </span>
        <span aria-hidden="true">▼</span>
      </button>
      {state.isOpen && (
        <ul className={styles.listBox}>
          {[...state.collection].map((item) => (
            <li
              key={item.key}
              className={styles.option}
              onClick={() => {
                state.setSelectedKey(item.key);
                state.close();
              }}
            >
              {item.rendered}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
