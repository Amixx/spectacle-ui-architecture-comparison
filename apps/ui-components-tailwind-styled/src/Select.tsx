import { useSelect, HiddenSelect, type AriaSelectProps } from "react-aria";
import { useSelectState } from "react-stately";
import { useRef } from "react";

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
    <div className="relative flex flex-col gap-xs">
      {props.label && (
        <label
          {...labelProps}
          className="font-sans text-sm text-text-secondary font-medium"
        >
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
        className="font-sans text-base py-sm px-md border border-border rounded bg-bg text-text cursor-pointer flex justify-between items-center gap-sm transition-colors duration-DEFAULT text-left hover:bg-bg-hover focus:outline-none focus:border-border-focus"
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
        <ul className="absolute top-full left-0 right-0 mt-xs p-xs bg-bg border border-border rounded list-none z-10 shadow-md max-h-[200px] overflow-y-auto">
          {[...state.collection].map((item) => (
            <li
              key={item.key}
              className="font-sans text-base p-sm cursor-pointer rounded-sm text-text hover:bg-bg-hover"
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
