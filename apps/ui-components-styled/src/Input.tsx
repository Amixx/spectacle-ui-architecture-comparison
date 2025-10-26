import { useTextField } from "react-aria";
import { useRef } from "react";
import styles from "./Input.module.css";

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
    <div className={styles.container}>
      {label && (
        <label {...labelProps} className={styles.label}>
          {label}
        </label>
      )}
      <input
        {...inputProps}
        ref={ref}
        className={styles.input}
        disabled={isDisabled}
      />
    </div>
  );
}
