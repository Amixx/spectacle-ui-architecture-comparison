import { useTextField } from "react-aria";
import { useRef } from "react";

export function Input({
  value,
  onChange,
  label,
  placeholder,
  isDisabled,
}: {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps } = useTextField(
    {
      value,
      onChange,
      label,
      placeholder,
      isDisabled,
    },
    ref
  );

  return (
    <div className="flex flex-col gap-xs">
      {label && (
        <label
          {...labelProps}
          className="font-sans text-sm text-text-secondary font-medium"
        >
          {label}
        </label>
      )}
      <input
        {...inputProps}
        ref={ref}
        className="font-sans text-base py-sm px-md border border-border rounded bg-bg text-text transition-colors duration-DEFAULT focus:outline-none focus:border-border-focus disabled:bg-bg-hover disabled:text-disabled disabled:cursor-not-allowed"
        disabled={isDisabled}
      />
    </div>
  );
}
